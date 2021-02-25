import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  StatusBar,
  Dimensions,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import Sessions from '../../components/Sessions';
import SquareCard, { Character, Planets } from '../../components/SquareCard';
import { theme } from '../../theme';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ImageBackground
        source={require('../../../assets/images/characters.jpg')}
        style={styles.charactersBackground}
        imageStyle={{ height: '100%' }}
      >
        <View style={styles.sessions}>
          <Sessions title="Characters">
            <Ionicons
              name="person-outline"
              color={theme.primary}
              size={30}
              style={{ marginRight: 10 }}
            />
          </Sessions>
          <FlatList
            horizontal
            overScrollMode="always"
            data={
              [
                {
                  title: 'Anakin',
                  type: 'character',
                  birthday: '19BBY',
                  gender: 'male',
                  specie: 'human',
                },

                {
                  title: 'Ahsoka',
                  type: 'character',
                  birthday: '19BBY',
                  gender: 'male',
                  specie: 'human',
                },
              ] as Character[]
            }
            renderItem={({ item }) => (
              <SquareCard
                type={{
                  title: item.title,
                  type: item.type,
                  birthday: item.birthday,
                  gender: item.gender,
                  specie: item.specie,
                }}
              />
            )}
            keyExtractor={(item) => item.title}
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
            <Ionicons
              name="planet-outline"
              color={theme.primary}
              size={30}
              style={{ marginRight: 10 }}
            />
          </Sessions>
          <FlatList
            horizontal
            overScrollMode="always"
            data={
              [
                {
                  title: 'Tatooine',
                  characters: 4,
                  climate: 'Rainy',
                  population: '1000',
                  type: 'planet',
                },
              ] as Planets[]
            }
            renderItem={({ item }) => (
              <SquareCard
                type={{
                  title: item.title,
                  type: item.type,
                  climate: item.climate,
                  population: item.population,
                  characters: item.characters,
                }}
              />
            )}
            keyExtractor={(item) => item.title}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: theme.black,
  },

  charactersBackground: {
    height:
      Dimensions.get('window').height / 2 +
      (StatusBar.currentHeight as number) +
      80,
    width: '100%',
    justifyContent: 'flex-end',
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
  },
});

export default Home;
