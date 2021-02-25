import React from 'react';
import { Text, View } from 'react-native';
import { fonts, sizes } from '../../theme';

interface Props {
  title: string;
}

const Sessions: React.FC<Props> = ({ children, title }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: sizes.margin,
      }}
    >
      {children}
      <Text
        style={{
          fontFamily: fonts.pop,
          color: 'white',
          fontSize: 24,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default Sessions;
