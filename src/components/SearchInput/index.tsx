import React from 'react';
import { StyleSheet, TextInputProps, View } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { fonts, theme } from '../../theme';

const SearchInput: React.FC<TextInputProps> = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <RectButton style={styles.button}>
        <Ionicons name="search-outline" size={25} color={theme.searchIcon} />
      </RectButton>
      <TextInput
        style={styles.input}
        placeholder="Your search here."
        placeholderTextColor="#555555"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    overflow: 'hidden',
    backgroundColor: theme.searchBackground,
    borderRadius: 10,
  },
  button: {
    backgroundColor: theme.searchIconBar,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginLeft: 15,
    fontFamily: fonts.osw,
  },
});

export default SearchInput;
