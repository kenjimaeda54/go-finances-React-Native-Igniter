import React from 'react';
import {RectButtonProps} from 'react-native-gesture-handler';
import {Container, Icon, Description, Button} from './style';

interface TransitionButtonProps extends RectButtonProps {
  description: string;
  isActivity: boolean;
  type: 'up' | 'down';
}

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
    se ficar acusando erro,verifica se esta tipado la*/
    <Container type={type} isActivity={isActivity}>
      <Button {...rest}>
        <Icon name={icon[type]} type={type} />
        <Description>{description}</Description>
      </Button>
    </Container>
  );
}
