import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
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
import SquareCard from '../../components/SquareCard';
import Characters from '../../interfaces/Characters';
import Planets from '../../interfaces/Planets';
import api from '../../services/api';
import { theme } from '../../theme';

interface ResponsePlanets {
  results: Planets[];
}

interface ResponseCharacters {
  results: Characters[];
}

const Home: React.FC = () => {
  const [planets, setPlanets] = useState<Planets[]>();
  const [characters, setCharacters] = useState<Characters[]>();

  useEffect(() => {
    Promise.all([
      api.get<ResponseCharacters>('people'),
      api.get<ResponsePlanets>('planets'),
    ])
      .then((values) => {
        setCharacters(values[0].data.results);
        setPlanets(values[1].data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  });

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
            data={characters}
            renderItem={({ item }) => (
              <SquareCard
                type={{
                  title: item.name,
                  type: 'character',
                  birthday: item.birth_year,
                  gender: item.gender,
                  height: item.height,
                }}
              />
            )}
            keyExtractor={(item) => item.name}
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
            data={planets}
            renderItem={({ item }) => (
              <SquareCard
                type={{
                  title: item.name,
                  type: 'planet',
                  climate: item.climate,
                  population: item.population,
                  characters: item.residents.length,
                }}
              />
            )}
            keyExtractor={(item) => item.name}
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
