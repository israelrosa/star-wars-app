import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import Logo from '../../svgs/logo';
import { fonts, sizes, theme } from '../../theme';
import SearchInput from '../SearchInput';

interface Props {
  title?: string;
  disableSearch?: boolean;
  onPress?: () => void | undefined;
  goBack?: boolean;
}

const Header: React.FC<Props> = ({ title, disableSearch, onPress, goBack }) => {
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
      {goBack && (
        <Ionicons
          onPress={onPress}
          name="chevron-back-outline"
          size={30}
          color="white"
          style={{ position: 'absolute', left: 20, top: 7 }}
        />
      )}
      {title ? (
        <Text
          style={{ fontFamily: fonts.sw, fontSize: 26, color: theme.primary }}
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
