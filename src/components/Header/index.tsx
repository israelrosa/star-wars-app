import React from 'react';
import { StatusBar, View } from 'react-native';
import Logo from '../../svgs/logo';
import { sizes } from '../../theme';
import SearchInput from '../SearchInput';

const Header: React.FC = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        marginTop: (StatusBar.currentHeight as number) + 20,
        paddingHorizontal: sizes.margin,
      }}
    >
      <Logo />
      <View
        style={{
          width: '100%',
          marginTop: 20,
        }}
      />
      <SearchInput />
    </View>
  );
};

export default Header;
