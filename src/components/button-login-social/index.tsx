import React from 'react';
import {RectButtonProps} from 'react-native-gesture-handler';
import {SvgProps} from 'react-native-svg';
import {Container, ViewSvg, Title} from './style';

interface ButtonLoginSocialProps extends RectButtonProps {
  title: string;
  svg: React.FC<SvgProps>;
}

export function ButtonLoginSocial({
  title,
  svg: Svg,
  ...rest
}: ButtonLoginSocialProps) {
  return (
    <Container {...rest}>
      <ViewSvg>
        <Svg />
      </ViewSvg>
      <Title>{title}</Title>
    </Container>
  );
}
