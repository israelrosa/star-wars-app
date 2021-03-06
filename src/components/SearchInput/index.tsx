import React, { useState } from 'react';
import { StyleSheet, TextInputProps, View } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { fonts, theme } from '../../theme';

interface Props extends TextInputProps {
  onSubmit: (text: string) => void;
}

const SearchInput: React.FC<Props> = ({ style, onSubmit, ...rest }) => {
  const [text, setText] = useState('');

  const HandleSubmitText = (): void => {
    onSubmit(text);
  };
  return (
    <View style={[styles.container, style]}>
      <RectButton style={styles.button} onPress={() => HandleSubmitText()}>
        <Ionicons name="search-outline" size={25} color={theme.searchIcon} />
      </RectButton>
      <TextInput
        style={styles.input}
        onSubmitEditing={() => HandleSubmitText()}
        onChangeText={(t) => setText(t)}
        placeholder="Your search here."
        placeholderTextColor="#555555"
        {...rest}
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
    marginHorizontal: 15,
    fontFamily: fonts.osw,
    color: 'white',
  },
});

export default SearchInput;
