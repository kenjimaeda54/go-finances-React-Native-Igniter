import React from 'react';
import {TextInputForm} from '.';
import {render} from '@testing-library/react-native';

describe('Input Component', () => {
  it('must have specific borde color when active', () => {
    const {getByTestId} = render(
      <TextInputForm
        testID="input-name"
        placeholder="E-mail"
        isAcitivy={true}
        autoCorrect={true}
      />,
    );

    const inputComponent = getByTestId('input-name');
    expect(inputComponent.props.style[0].borderColor);
  });
});
