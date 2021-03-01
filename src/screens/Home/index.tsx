import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  StatusBar,
  Dimensions,
  Text,
} from 'react-native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import Sessions from '../../components/Sessions';
import SquareCard from '../../components/SquareCard';
import Characters from '../../interfaces/Characters';
import Planets from '../../interfaces/Planets';
import api from '../../services/api';
import { fonts, theme } from '../../theme';
import Load from '../Load';

interface ResponsePlanets {
  results: Planets[];
}

interface ResponseCharacters {
  results: Characters[];
}

const Home: React.FC = () => {
  const [planets, setPlanets] = useState<Planets[]>();
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState<Characters[]>();
  const [isUnmounted, setIsUnmounted] = useState(false);
  const navigator = useNavigation();

  useEffect(() => {
    !isUnmounted &&
      Promise.all([
        api.get<ResponseCharacters>('people'),
        api.get<ResponsePlanets>('planets'),
      ]).then((values) => {
        setCharacters(values[0].data.results);
        setPlanets(values[1].data.results);
        setLoading(false);
      });

    return () => {
      setIsUnmounted(true);
    };
  });

  return (
    <>
      {loading ? (
        <Load />
      ) : (
        <View style={styles.container}>
          <Header disableSearch />
          <ImageBackground
            source={require('../../../assets/images/characters.jpg')}
            style={styles.charactersBackground}
            imageStyle={{ height: '100%' }}
          >
            <View style={styles.sessions}>
              <Sessions
                title="Characters"
                onPress={() =>
                  navigator.navigate('List', {
                    url: 'people',
                    title: 'Characters',
                  })
                }
              >
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
                    onPress={() =>
                      navigator.navigate('Details', {
                        url: item.url,
                        type: 'character',
                      })
                    }
                  />
                )}
                keyExtractor={(item) => item.name}
                ListFooterComponent={() => (
                  <TouchableHighlight
                    style={styles.moreContainer}
                    onPress={() =>
                      navigator.navigate('List', {
                        url: 'people',
                        title: 'Characters',
                      })
                    }
                  >
                    <Ionicons
                      name="ellipsis-horizontal"
                      size={25}
                      color="white"
                    />
                  </TouchableHighlight>
                )}
                ListFooterComponentStyle={{
                  justifyContent: 'center',
                  alignContent: 'center',
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
              <Sessions
                title="Planets"
                onPress={() =>
                  navigator.navigate('List', {
                    url: 'planets',
                    title: 'Planets',
                  })
                }
              >
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
                    onPress={() =>
                      navigator.navigate('Details', {
                        url: item.url,
                        type: 'planet',
                      })
                    }
                  />
                )}
                ListFooterComponent={() => (
                  <TouchableHighlight
                    style={styles.moreContainer}
                    onPress={() =>
                      navigator.navigate('List', {
                        url: 'planets',
                        title: 'Planets',
                      })
                    }
                  >
                    <Ionicons
                      name="ellipsis-horizontal"
                      size={25}
                      color="white"
                    />
                  </TouchableHighlight>
                )}
                ListFooterComponentStyle={{
                  justifyContent: 'center',
                  alignContent: 'center',
                }}
                keyExtractor={(item) => item.name}
              />
            </View>
          </ImageBackground>
        </View>
      )}
    </>
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

  moreContainer: {
    height: 60,
    marginLeft: 5,
    width: 60,
    borderRadius: 50,
    opacity: 0.8,
    backgroundColor: theme.cardBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
