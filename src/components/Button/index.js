import React from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container} from './styles';

const Button = ({children, loading, ...rest}) => (
  <Container {...rest}>
    {loading ? (
      <ActivityIndicator size="small" color="#FFF" />
    ) : (
      <Icon name="check" size={35} color="#000" />
    )}
  </Container>
);

export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};
