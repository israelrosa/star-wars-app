import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  StatusBar,
  Dimensions,
} from 'react-native';
import Header from '../../components/Header';
import Sessions from '../../components/Sessions';
import SquareCard from '../../components/SquareCard';
import { sizes, theme } from '../../theme';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/characters.jpg')}
        style={styles.charactersBackground}
        imageStyle={{ height: '100%' }}
      >
        <Header />
        <View style={styles.sessions}>
          <Sessions title="Characters">
            <Ionicons name="person-outline" color={theme.primary} size={30} />
          </Sessions>
          <SquareCard
            title="Anakin"
            type={{
              type: 'character',
              birthday: '19BBY',
              gender: 'male',
              specie: 'human',
            }}
          />
        </View>
      </ImageBackground>
      <ImageBackground
        source={require('../../../assets/images/planetshome.jpg')}
        style={styles.planetsBackground}
        imageStyle={{ height: '100%' }}
      >
        <View style={styles.sessions}>
          <Sessions title="Planets">
            <Ionicons name="planet-outline" color={theme.primary} size={30} />
          </Sessions>
          <SquareCard
            title="Tatooine"
            type={{
              type: 'planet',
              characters: 4,
              climate: 'rainy',
              population: '1000',
            }}
          />
        </View>
      </ImageBackground>
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  planetsBackground: {
    flex: 1,
    minHeight: 280,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  sessions: {
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: sizes.margin,
  },
});

export default Home;
