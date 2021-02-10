import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, TInput, ButtonTop} from './styles';

function Input({style, icon, onPressFunc, tipo, ...rest}, ref) {
  return (
    <Container style={style} tipo={tipo}>
      <TInput {...rest} tipo={tipo} ref={ref} />
      <ButtonTop onPress={onPressFunc}>
        <Icon name="cached" size={35} color="#000" />
      </ButtonTop>
    </Container>
  );
}
export default forwardRef(Input);
Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  icon: null,
  style: {},
};
