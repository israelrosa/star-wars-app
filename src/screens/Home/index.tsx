import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  StatusBar,
  Dimensions,
} from 'react-native';
import SearchInput from '../../components/SearchInput';
import Logo from '../../svgs/logo';
import { theme, sizes } from '../../theme';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/characters.jpg')}
        style={styles.charactersBackground}
        imageStyle={{ height: '100%' }}
      >
        <Logo style={{ marginTop: (StatusBar.currentHeight as number) + 20 }} />
        <View
          style={{
            paddingHorizontal: sizes.margin,
            width: '100%',
            marginTop: 20,
          }}
        >
          <SearchInput />
        </View>
      </ImageBackground>
      <ImageBackground
        source={require('../../../assets/images/planetshome.jpg')}
        style={styles.planetsBackground}
        imageStyle={{ height: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.black,
  },

  charactersBackground: {
    height:
      Dimensions.get('window').height / 2 +
      (StatusBar.currentHeight as number) +
      80,
    width: '100%',
    alignItems: 'center',
  },

  planetsBackground: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Home;
