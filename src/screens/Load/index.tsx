import React from 'react';
import { StyleSheet, View } from 'react-native';
import Loading from '../../components/Loading';
import Logo from '../../svgs/logo';
import { theme } from '../../theme';

const Load: React.FC = () => {
  return (
    <View style={styles.container}>
      <Loading />
      <Logo style={{ marginTop: 30, transform: [{ scale: 1.2 }] }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.black,
  },
});
export default Load;
