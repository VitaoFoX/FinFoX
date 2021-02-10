import React from 'react';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import {ProgressCircle} from 'react-native-svg-charts';
import {Container, Grafico, Left, Info, Name, Time} from './styles';

export default function PanelDate({name, value, color, colorHex, percentual}) {
  return (
    <Container>
      <Left>
        <Grafico>
          <ProgressCircle
            style={{height: 50}}
            progress={percentual}
            progressColor={color}
            colorHex
          />
        </Grafico>
        <Info>
          <Name>{name}</Name>
          <Time>{value}</Time>
        </Info>
      </Left>
    </Container>
  );
}
