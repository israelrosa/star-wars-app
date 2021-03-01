import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useRef } from 'react';
import {
  TouchableWithoutFeedback,
  Text,
  TouchableWithoutFeedbackProps,
  View,
  Animated,
} from 'react-native';
import { fonts, sizes } from '../../theme';

interface Props extends TouchableWithoutFeedbackProps {
  title: string;
  isPressable?: boolean;
}

const Sessions: React.FC<Props> = ({
  children,
  title,
  isPressable,
  ...rest
}) => {
  const move = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const delay = 1;
    const duration = 150;
    Animated.loop(
      Animated.sequence([
        Animated.timing(move, {
          toValue: -5,
          duration,
          useNativeDriver: true,
          delay,
        }),
        Animated.timing(move, {
          toValue: 0,
          duration,
          useNativeDriver: true,
          delay,
        }),
      ]),
    ).start();
  });

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
            top: 2,
          }}
        >
          {title}
        </Text>
        {isPressable && (
          <>
            <Animated.View
              style={{
                flexDirection: 'row',
                marginLeft: 10,
                transform: [{ translateX: move }],
              }}
            >
              <Ionicons name="chevron-back-outline" size={25} color="white" />
              <Ionicons
                name="chevron-back-outline"
                size={25}
                color="white"
                style={{ right: 18 }}
              />
            </Animated.View>
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Sessions;
