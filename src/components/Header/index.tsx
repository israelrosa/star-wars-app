import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import Logo from '../../svgs/logo';
import { fonts, sizes, theme } from '../../theme';
import SearchInput from '../SearchInput';

interface Props {
  title?: string;
  disableSearch?: boolean;
}

const Header: React.FC<Props> = ({ title, disableSearch }) => {
  return (
    <View
      style={{
        alignItems: 'center',
        paddingHorizontal: sizes.margin,
        position: 'absolute',
        zIndex: 2,
        width: '100%',
        top: (StatusBar.currentHeight as number) + 20,
      }}
    >
      {title ? (
        <Text
          style={{ fontFamily: fonts.sw, fontSize: 24, color: theme.primary }}
        >
          {title}
        </Text>
      ) : (
        <Logo />
      )}

      <View
        style={{
          width: '100%',
          marginTop: 20,
        }}
      />
      <SearchInput style={{ display: disableSearch ? 'none' : 'flex' }} />
    </View>
  );
};

export default Header;
