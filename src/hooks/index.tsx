import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as AuthSession from 'expo-auth-session';

const {CLIENT_ID} = process.env;
const {REDIRECT_URI} = process.env;

interface ProviderProps {
  children: ReactNode;
}

interface UserProps {
  id: string;
  name: string;
  email: string;
  picture: string;
}

interface AthContext {
  user: UserProps;
  singInGoogle(): Promise<void>;
  singOut(): Promise<void>;
}

interface AuthorizationProps {
  type: string;
  params: {
    access_token: string;
  };
}

const AuthProvider = createContext({} as AthContext);

function Provider({children}: ProviderProps) {
  const [user, setUser] = useState<UserProps>({} as UserProps);
  let fetchStorage = false;

  const storageKey = '@goFinances: key';

  async function singInGoogle() {
    try {
      const RESPONSE_TYPE = 'token';
      const SCOPE = encodeURI('profile email');
      /* preciso fazer assim por causa do espaço entre as string */
      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const {type, params} = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationProps;

      if (type === 'success') {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`,
        );
        const userInfo = await response.json();
        await AsyncStorage.setItem(storageKey, JSON.stringify(userInfo));
        const responseStorage = await AsyncStorage.getItem(storageKey);
        if (responseStorage) {
          const fetchStorage = JSON.parse(responseStorage) as UserProps;
          setUser(fetchStorage);
        }
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async function singOut() {
    setUser({} as UserProps);
    await AsyncStorage.removeItem(storageKey);
  }

  /*Para recarregar sempre a tela a partir do momento que esta logado
  foi criado duas situações.
  Primeiro e setar no momento que chamar a função singInGoogle(),
  ou seja quando clicar no botão de login social pego do async storage
  segunda e usar um usefect e setar, no momento de carregar os provider 
  Alem de resolver esse problema  ficou performático,se der console.log 
  em user sempre so vou ter uma renderização da requisição, também
  nao me preocupo em sobrescrever os dados,porque oque quero e apenas um usuário*/
  useEffect(() => {
    async function loadStorage() {
      const responseStorage = await AsyncStorage.getItem(storageKey);
      if (responseStorage) {
        const fetchStorage = JSON.parse(responseStorage) as UserProps;
        setUser(fetchStorage);
      }
    }
    loadStorage();
  }, []);

  return (
    <AuthProvider.Provider
      value={{user, singInGoogle, singOut}} /*user e um objeto por isso {{}} */
    >
      {children}
    </AuthProvider.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthProvider);
  return context;
}

export {Provider, useAuth};
