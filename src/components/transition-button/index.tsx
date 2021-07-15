import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Container, Icon, Description} from './style';

type TransitionButtonProps = TouchableOpacityProps & {
  description: string;
  isActivity: boolean;
  type: 'up' | 'down';
};

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
};

export function TransitionButton({
  description,
  isActivity,
  type,
  ...rest
}: TransitionButtonProps) {
  return (
    /* isActivity e uma propriedade esta passando para styled component  
    se ficar acusando erro,verifica se esta tipando la*/
    <Container {...rest} type={type} isActivity={isActivity}>
      <Icon name={icon[type]} type={type} />
      <Description>{description}</Description>
    </Container>
  );
}
