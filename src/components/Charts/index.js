import React from 'react';
// import {Text} from 'react-native';
import {PieChart} from 'react-native-svg-charts';

// import { Container } from './styles';

export default function Charts({pagar, receber}) {
  const data = [
    {
      key: 1,
      amount: receber,
      svg: {fill: 'rgb(0, 204, 3)'},
    },
    {
      key: 2,
      amount: pagar,
      svg: {fill: 'rgba(255, 0, 0, 0.8)'},
    },
  ];

  /* const Labels = ({slices, height, width}) =>
    slices.map((slice, index) => {
      const {labelCentroid, pieCentroid, data} = slice;
      return (
        <Text
          key={index}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill="white"
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize={30}
          stroke="black"
          strokeWidth={0.5}>
          Pagar
        </Text>
      );
    }); */

  return (
    <PieChart
      style={{height: 180}}
      valueAccessor={({item}) => item.amount}
      data={data}
      spacing={0}
      outerRadius="95%"
    />
  );
}
// <Labels />
