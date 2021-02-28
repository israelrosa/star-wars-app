import React from 'react';
import {
  TouchableWithoutFeedback,
  Text,
  TouchableWithoutFeedbackProps,
  View,
} from 'react-native';
import { fonts, sizes } from '../../theme';

interface Props extends TouchableWithoutFeedbackProps {
  title: string;
}

const Sessions: React.FC<Props> = ({ children, title, ...rest }) => {
  return (
    <TouchableWithoutFeedback
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
      {...rest}
    >
      <View
        style={{
          flexDirection: 'row',
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
    </TouchableWithoutFeedback>
  );
};

export default Sessions;
