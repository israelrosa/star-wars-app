import React from 'react';
import { Text, View } from 'react-native';
import { fonts } from '../../theme';

interface Props {
  title: string;
}

const Sessions: React.FC<Props> = ({ children, title }) => {
  return (
    <View
      style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}
    >
      {children}
      <Text
        style={{
          fontFamily: fonts.pop,
          marginLeft: 10,
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
