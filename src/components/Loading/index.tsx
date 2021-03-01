import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View, ViewProps } from 'react-native';
import { theme } from '../../theme';

// import { Container } from './styles';

const Loading: React.FC<ViewProps> = ({ style }) => {
  const width1 = useRef(new Animated.Value(0)).current;
  const width2 = useRef(new Animated.Value(0)).current;
  const width3 = useRef(new Animated.Value(0)).current;
  const width4 = useRef(new Animated.Value(0)).current;
  const width5 = useRef(new Animated.Value(0)).current;
  const width6 = useRef(new Animated.Value(0)).current;
  const width7 = useRef(new Animated.Value(0)).current;
  const width8 = useRef(new Animated.Value(0)).current;
  const width9 = useRef(new Animated.Value(0)).current;
  const width10 = useRef(new Animated.Value(0)).current;
  const width11 = useRef(new Animated.Value(0)).current;
  const width12 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    width1.setValue(0);
    width2.setValue(0);
    width3.setValue(0);
    width4.setValue(0);
    width5.setValue(0);
    width6.setValue(0);
    width7.setValue(0);
    width8.setValue(0);
    width9.setValue(0);
    width10.setValue(0);
    width11.setValue(0);
    width12.setValue(0);
    const duration = 150;
    const delay = 20;
    Animated.loop(
      Animated.sequence([
        Animated.timing(width1, {
          toValue: 1,
          duration,
          delay,
          useNativeDriver: true,
        }),
        Animated.timing(width2, {
          toValue: 1,
          duration,
          delay,
          useNativeDriver: true,
        }),
        Animated.timing(width3, {
          toValue: 1,
          duration,
          delay,
          useNativeDriver: true,
        }),
        Animated.timing(width4, {
          toValue: 1,
          duration,
          delay,
          useNativeDriver: true,
        }),
        Animated.timing(width5, {
          toValue: 1,
          duration,
          delay,
          useNativeDriver: true,
        }),
        Animated.timing(width6, {
          toValue: 1,
          duration,
          delay,
          useNativeDriver: true,
        }),
        Animated.timing(width7, {
          toValue: 1,
          duration,
          delay,
          useNativeDriver: true,
        }),
        Animated.timing(width8, {
          toValue: 1,
          duration,
          delay,
          useNativeDriver: true,
        }),
        Animated.timing(width9, {
          toValue: 1,
          duration,
          delay,
          useNativeDriver: true,
        }),
        Animated.timing(width10, {
          toValue: 1,
          duration,
          delay,
          useNativeDriver: true,
        }),
        Animated.timing(width11, {
          toValue: 1,
          duration,
          delay,
          useNativeDriver: true,
        }),
        Animated.timing(width12, {
          toValue: 1,
          duration,
          delay,
          useNativeDriver: true,
        }),
        Animated.timing(width12, {
          toValue: 0,
          duration,
          delay: 200,
          useNativeDriver: true,
        }),
        Animated.timing(width11, {
          toValue: 0,
          duration,
          delay,
          useNativeDriver: true,
        }),
        Animated.timing(width10, {
          toValue: 0,
          duration,
          delay,
          useNativeDriver: true,
        }),
        Animated.timing(width9, {
          toValue: 0,
          duration,
          delay,
          useNativeDriver: true,
        }),
        Animated.timing(width8, {
          toValue: 0,
          duration,
          delay,
          useNativeDriver: true,
        }),
        Animated.timing(width7, {
          toValue: 0,
          duration,
          delay,
          useNativeDriver: true,
        }),
        Animated.timing(width6, {
          toValue: 0,
          duration,
          delay,
          useNativeDriver: true,
        }),
        Animated.timing(width5, {
          toValue: 0,
          duration,
          delay,
          useNativeDriver: true,
        }),
        Animated.timing(width4, {
          toValue: 0,
          duration,
          delay,
          useNativeDriver: true,
        }),
        Animated.timing(width3, {
          toValue: 0,
          duration,
          delay,
          useNativeDriver: true,
        }),
        Animated.timing(width2, {
          toValue: 0,
          duration,
          delay,
          useNativeDriver: true,
        }),
        Animated.timing(width1, {
          toValue: 0,
          duration,
          delay,
          useNativeDriver: true,
        }),
      ]),
      { iterations: -1 },
    ).start();
  });

  return (
    <View style={[styles.container, style]}>
      <Animated.View
        style={[styles.bar, styles.bar1, { transform: [{ scaleX: width1 }] }]}
      />
      <Animated.View
        style={[styles.bar, styles.bar2, { transform: [{ scaleX: width2 }] }]}
      />
      <Animated.View
        style={[styles.bar, styles.bar3, { transform: [{ scaleX: width3 }] }]}
      >
        <View style={[styles.barNone, styles.barNone3]} />
      </Animated.View>
      <Animated.View
        style={[styles.bar, styles.bar4, { transform: [{ scaleX: width4 }] }]}
      >
        <View style={[styles.barNone, styles.barNone4]} />
      </Animated.View>
      <Animated.View
        style={[styles.bar, styles.bar5, { transform: [{ scaleX: width5 }] }]}
      >
        <View style={[styles.barNone, styles.barNone5]} />
      </Animated.View>
      <Animated.View
        style={[styles.bar, styles.bar6, { transform: [{ scaleX: width6 }] }]}
      >
        <View style={[styles.barNone, styles.barNone6]} />
      </Animated.View>
      <Animated.View
        style={[styles.bar, styles.bar6, { transform: [{ scaleX: width7 }] }]}
      >
        <View style={[styles.barNone, styles.barNone6]} />
      </Animated.View>
      <Animated.View
        style={[styles.bar, styles.bar5, { transform: [{ scaleX: width8 }] }]}
      >
        <View style={[styles.barNone, styles.barNone5]} />
      </Animated.View>
      <Animated.View
        style={[styles.bar, styles.bar4, { transform: [{ scaleX: width9 }] }]}
      >
        <View style={[styles.barNone, styles.barNone4]} />
      </Animated.View>
      <Animated.View
        style={[styles.bar, styles.bar3, { transform: [{ scaleX: width10 }] }]}
      >
        <View style={[styles.barNone, styles.barNone3]} />
      </Animated.View>
      <Animated.View
        style={[styles.bar, styles.bar2, { transform: [{ scaleX: width11 }] }]}
      />
      <Animated.View
        style={[styles.bar, styles.bar1, { transform: [{ scaleX: width12 }] }]}
      />
    </View>
  );
};

const widthBar = 20;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  bar: {
    height: 4,
    marginVertical: 1,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.primary,
  },

  bar1: {
    width: widthBar,
  },
  bar2: {
    width: widthBar * 2,
  },
  bar3: {
    width: widthBar * 2.5,
  },
  bar4: {
    width: widthBar * 3,
  },
  bar5: {
    width: widthBar * 3.2,
  },
  bar6: {
    width: widthBar * 3.3,
  },

  barNone: {
    height: 8,
    marginVertical: 1,
    borderRadius: 5,
    bottom: -4,
    backgroundColor: theme.black,
  },

  barNone3: {
    width: widthBar * 1.5,
  },
  barNone4: {
    width: widthBar * 2,
  },
  barNone5: {
    width: widthBar * 2.2,
  },
  barNone6: {
    width: widthBar * 2.3,
  },
});
export default Loading;
