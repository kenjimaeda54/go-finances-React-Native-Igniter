# go-finances-React-Native-Igniter

Aplicativo controle de fianças

# Go finances

Projeto de finanças, Igniter

## Tabelas de conteúdos

- Visão geral
  - <a href='#Desafio' > Desafio </a>
  - <a href='#Construção' > Construção </a>
  - <a href="#Figma"> Figma </a>
  - <a href='#o-que-eu-aprendi' > Aprendizado </a>
  - <a href='#Feature' > Feature </a>
  - <a href='#Dependências'> Dependências </a>

## Visão Geral

## Desafio

- Criar aplicação os campos interação sao visáveis.
- Controle de seus gastos através da possibilidade de registrar selecionado por categorias.

## Figma

- [figma](<https://www.figma.com/file/5rTZsZgnhjHC8ohThu5eNM/GoFinances-Ignite-(Copy)?node-id=0%3A1>)

## Construção

![VSCode](https://img.shields.io/badge/-VSCode-0085D1?style=flat-square&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white)
![React Native](https://img.shields.io/badge/-reactnative-212121?style=flat-square&logo=reactnative&logoColor=white)
![typescript](https://img.shields.io/badge/-typescript-EFD81D?style=flat-square&logo=typescript&logoColor=black)
![styledComponent](https://img.shields.io/badge/-styledComponent-EFD81D?style=flat-square&logo=styledComponent&logoColor=black)
![hooksForm](https://img.shields.io/badge/-hooksForm-EFD81D?style=flat-square&logo=hooksForm&logoColor=black)

## O que eu aprendi

Melhorei as técnicas nas construções de componentes em React Native,aperfeiçoei AsyncStorage é login social

Toda aplicação, foco foi em composição usando o principio design de Software Atomics [desing Atomics](https://atomicdesign.bradfrost.com/chapter-2/) </br>

Melhorei técnica no controle de fluxo exemplo abaixo no método
filter retorna apenas um array de objetos, </br>
normalmente ,para pegar os valores dentro desse array,utiliza [0]</br>
Aplicando a destruction fica elegante

```typescript
const [category] = categories.filter(value => data.category === value.key);
```

Reforcei conceitos do uso do encodeURI, nesse caso sao parâmetros enviado um </br>
endpoint, questão e que http nao compreende espaço ou seja 'Profile Email',</br>
ira gerar erro,com uso do encodeURI, sera formatado da maneira correta

```typeScript
const SCOPE = encodeURI('profile email');
```

Reforcei alguns conceitos nas passagens de props, setCategory e um useState</br>
de outra função ,pertence ao Register</br>
normalmente setamos com React.State...
Mameira simplificada de tipa e usando setCategory:()=>void

```typescript
  interface CategorySelectedProps {
  setCategory: (category: Category,) => void
  /* ao invés de passar React.State posso passar assim */;
  closeModal: () => void;
  category: Category;
}

```
```jsx
export function CategorySelected({
  setCategory,
  closeModal,
  category,
}: CategorySelectedProps){
 return()
 }
  

 /*------------------- */

export function Register() {
  const [transitionSelected, setTransitionSelected] = useState('');
  const [changeModal, setChangeModal] = useState(false);
  const [category, setCategory] = useState({
    key: 'Categoria',
    name: 'category'
  }
  
```
```jsx
  return(
    <Modal visible={changeModal}>
          <CategorySelected
            category={category}
            setCategory={setCategory}
            closeModal={handleCloseModal}
        />
  )

}
```

Normalmente quando esta usando styled component alguns bugs em tipagem</br>
pode afetar aplicação,exemplo no caso abaixo, RectButton e da lib </br>
[gesture handler](https://docs.swmansion.com/react-native-gesture-handler/docs/)
para poder,efeito de onPress do botão fechar o modal usei a view da propriá lib do gesture_handler

```javascript
export const Container = styled(GestureHandlerRootView)`
  flex: 1;
`;

export const Container = styled(RectButton)`
  margin-top: 16px;
  width: 100%;
  padding: 18px 16px;
  flex-direction: row;
  background-color: ${({theme}) => theme.colors.shape};
  justify-content: space-between;
`;
```

Usei alguns reursos interesante do java script,como pegar maior numero de array

```javascript
const lastTransaction = new Date(
  Math.max.apply(
    Math,
    transaction.map(transaction => new Date(transaction.date).getTime()),
  ),
);
```

Usei os recursos dol java script para formatação de moedas e data,no caso</br>
do Inl, fiz a instalação por [yarn](https://www.npmjs.com/package/intl) </br>
android nao funcionou nativamente</br>

```javascript
setAmountTotal({
  entry: {
    amount: entryTotal.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }),
    lastTransition:
      lastTransitionEntries === 0
        ? 'Nao possui transações'
        : `Ultima entrada dia  ${lastTransitionEntries}`,
  },
});
const date = Intl.DateTimeFormat('pt-BR', {
  day: '2-digit',
  month: '2-digit',
  year: '2-digit',
}).format(new Date(value.date));
```

Utilizei uma lib incrível para formulários, usei o [Hooks_Form](https://react-hook-form com/), inclusive utilizei o yup com Hook Form, para realizar validações </br>
Primeiro construo um schema,colocando os campos necessários para validar.
Depois através do useForm consigo, com formState:{errors},pega os erros </br>
Assim posso usar esses erros aonde desejo.
Preciso encapsula os campos que usuário vai digitar,ou seja envolver seus input</br>
com um Controller, e no caso os name,sera a referencia para os form ou seja, </br>
no exemplo abaixo o form.amount, vem da referencia name.Nela que ficar os </br>
valores colocados pelo usuário no input

```typescript
const schema = Yup.object().shape({
  name: Yup.string().required('Nome e obrigatório'),
  amount: Yup.number()
    .typeError('Precisa ser numérico')
    .positive('Precisa ser números positivos')
    .required('Preço e obrigatório'),
});
```
```jsx
const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

    <InputForm
              error={errors.name && errors.name.message}
              /*precisa verificar se existe erro,porque caso nao tenha vai
            gerar undefined  */
              control={control}
              name="name"
              placeholder="Nome"
              autoCorrect={false}
              autoCapitalize="sentences"
            />

/*-------------------*/
export function InputForm({control, name, error, ...rest}: InputFormProps) {
  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInputForm onChangeText={onChange} value={value} {...rest} />
        )}
      />
      {error && <Error> {error} </Error>}
    </Container>
  );

```

Para facilitar operações data, usei o [date_fns](https://date-fns.org/)</br>
Olha exemplo abaixo como e fácil somar e subtrair,meses

```typescript
function changeDate(date: 'next' | 'prev') {
  setIsLoading(true);
  if (date === 'next') {
    setDateSelected(addMonths(dateSelected, 1));
  } else {
    setDateSelected(subMonths(dateSelected, 1));
  }
}
```
```jsx

<MonthSelected>
            <MonthIconSelected onPress={() => changeDate('prev')}>
              <Icon name="chevron-left" />
              {/*se der erro de tipagem olha se esta no styled component (Feather)`` , sem o `` pode gerar erro de tipagem */}
            </MonthIconSelected>

            <Month>
              {/*caso comece a gerar erro de render formata a data*/}
              {format(dateSelected, 'MMM, yyyy', {
                locale: ptBR,
              })}
            </Month>
```

Por fim utilizei uma lib interessante para gráficos [victory](https://formidable.com/open-source/victory/docs/native/). Com ela posso referenciar quem sera os </br>
eixos x e y, dentro do data,que no casso é um array.
Exemplo meu array tem uma variável com nome total, no caso do gráfico de pizza, x e y ser que ser números ou string,em total é o valor do numero correspondente ao amount.
Para colocar os label dentro do gráfico usei labelRadius

```jsx
<VictoryPie
  style={{
    labels: {
      fontSize: RFValue(16),
      fontFamily: fonts.bold,
      fontWeight: 700,
      lineHeight: RFValue(24),
      fill: colors.shape,
      /*aqui e um svg então nao e color sim fill  */
    },
  }}
  labelRadius={70}
  colorScale={totalByCategories.map(colors => colors.color)}
  data={totalByCategories}
  x="percentExpensive"
  y="total"
/>
```

# Feature

- Hooks
- styled component
- Atomics
- Tipagem

### Dependencias

- [App loading](https://docs.expo.io/versions/latest/sdk/app-loading/)
- [Google Fonts](https://docs.expo.io/guides/using-custom-fonts/#using-a-google-font)
- [Stack Stack](https://reactnavigation.org/docs/hello-react-navigation)
- [Victory Pye](https://formidable.com/open-source/victory/docs/native/)
- [Responsive_Font Size](https://github.com/heyman333/react-native-responsive-fontsize)
- [Hook Form](https://react-hook-form.com/)
- [Ract Native uuid](https://github.com/eugenehp/react-native-uuid)
- [Svg Transformer](https://github.com/kristerkari/react-native-svg-transformer)
- [Inline Babel Dotenev](https://github.com/brysgo/babel-plugin-inline-dotenv)
