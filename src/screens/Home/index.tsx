import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  StatusBar,
  Dimensions,
} from 'react-native';
import {
  FlatList,
  ScrollView,
  TouchableHighlight,
} from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../components/Header';
import Sessions from '../../components/Sessions';
import SquareCard from '../../components/SquareCard';
import Characters from '../../interfaces/Characters';
import Planets from '../../interfaces/Planets';
import api from '../../services/api';
import { theme } from '../../theme';
import Load from '../Load';
import Species from '../../interfaces/Species';
import Films from '../../interfaces/Films';
import Vehicles from '../../interfaces/Vehicles';
import Starships from '../../interfaces/Starships';

interface ResponsePlanets {
  results: Planets[];
}
interface ResponseCharacters {
  results: Characters[];
}
interface ResponseSpecies {
  results: Species[];
}
interface ResponseFilms {
  results: Films[];
}
interface ResponseVehicles {
  results: Vehicles[];
}
interface ResponseStarships {
  results: Starships[];
}

const Home: React.FC = () => {
  const [planets, setPlanets] = useState<Planets[]>();
  const [characters, setCharacters] = useState<Characters[]>();
  const [species, setSpecies] = useState<Species[]>();
  const [films, setFilms] = useState<Films[]>();
  const [vehicles, setVehicles] = useState<Vehicles[]>();
  const [starships, setStarships] = useState<Starships[]>();
  const [loading, setLoading] = useState(true);
  const navigator = useNavigation();

  useEffect(() => {
    let isUnmounted = false;
    !isUnmounted &&
      Promise.all([
        api.get<ResponseCharacters>('people'),
        api.get<ResponsePlanets>('planets'),
        api.get<ResponseSpecies>('species'),
        api.get<ResponseFilms>('films'),
        api.get<ResponseVehicles>('vehicles'),
        api.get<ResponseStarships>('starships'),
      ]).then((values) => {
        setCharacters(values[0].data.results);
        setPlanets(values[1].data.results);
        setSpecies(values[2].data.results);
        setFilms(values[3].data.results);
        setVehicles(values[4].data.results);
        setStarships(values[5].data.results);
        setLoading(false);
      });

    return () => {
      isUnmounted = true;
    };
  }, []);

  return (
    <>
      {loading ? (
        <Load />
      ) : (
        <View style={styles.container}>
          <Header disableSearch />
          <ScrollView>
            {/* Characters */}
            <ImageBackground
              source={require('../../../assets/images/home/characters.jpg')}
              style={styles.charactersBackground}
              imageStyle={{ height: '100%' }}
            >
              <LinearGradient
                colors={['rgba(18,18,18,0.8)', '#121212']}
                style={{ flex: 1, justifyContent: 'flex-end' }}
              >
                <View style={styles.sessions}>
                  <Sessions
                    title="Characters"
                    isPressable
                    onPress={() =>
                      navigator.navigate('List', {
                        url: 'people',
                        title: 'Characters',
                        type: 'character',
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
                      <>
                        {characters && characters?.length > 0 && (
                          <TouchableHighlight
                            style={styles.moreContainer}
                            onPress={() =>
                              navigator.navigate('List', {
                                url: 'people',
                                title: 'Characters',
                                type: 'character',
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
                      </>
                    )}
                    ListFooterComponentStyle={{
                      justifyContent: 'center',
                      alignContent: 'center',
                    }}
                  />
                </View>
              </LinearGradient>
            </ImageBackground>
            {/* Planets */}
            <ImageBackground
              source={require('../../../assets/images/home/planets.jpg')}
              style={styles.otherBackgrounds}
              imageStyle={{ height: '100%' }}
            >
              <LinearGradient
                colors={['#121212', 'rgba(18,18,18,0.5)', '#121212']}
                style={{ flex: 1, justifyContent: 'flex-end' }}
              >
                <View style={styles.sessions}>
                  <Sessions
                    title="Planets"
                    isPressable
                    onPress={() =>
                      navigator.navigate('List', {
                        url: 'planets',
                        title: 'Planets',
                        type: 'planet',
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
                      <>
                        {planets && planets.length > 0 && (
                          <TouchableHighlight
                            style={styles.moreContainer}
                            onPress={() =>
                              navigator.navigate('List', {
                                url: 'planets',
                                title: 'Planets',
                                type: 'planet',
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
                      </>
                    )}
                    ListFooterComponentStyle={{
                      justifyContent: 'center',
                      alignContent: 'center',
                    }}
                    keyExtractor={(item) => item.name}
                  />
                </View>
              </LinearGradient>
            </ImageBackground>
            {/* Species */}
            <ImageBackground
              source={require('../../../assets/images/home/species.jpg')}
              style={styles.otherBackgrounds}
              imageStyle={{ height: '100%' }}
            >
              <LinearGradient
                colors={['#121212', 'rgba(18,18,18,0.5)', '#121212']}
                style={{ flex: 1, justifyContent: 'flex-end' }}
              >
                <View style={styles.sessions}>
                  <Sessions
                    title="Species"
                    isPressable
                    onPress={() =>
                      navigator.navigate('List', {
                        url: 'species',
                        title: 'Species',
                        type: 'specie',
                      })
                    }
                  >
                    <Ionicons
                      name="body-outline"
                      color={theme.primary}
                      size={30}
                      style={{ marginRight: 10 }}
                    />
                  </Sessions>
                  <FlatList
                    horizontal
                    overScrollMode="always"
                    data={species}
                    renderItem={({ item }) => (
                      <SquareCard
                        type={{
                          title: item.name,
                          type: 'specie',
                          language: item.language,
                          averangeLife: item.average_lifespan,
                          averangeHeight: item.average_height,
                        }}
                        onPress={() =>
                          navigator.navigate('Details', {
                            url: item.url,
                            type: 'specie',
                          })
                        }
                      />
                    )}
                    ListFooterComponent={() => (
                      <>
                        {species && species.length > 0 && (
                          <TouchableHighlight
                            style={styles.moreContainer}
                            onPress={() =>
                              navigator.navigate('List', {
                                url: 'species',
                                title: 'Species',
                                type: 'specie',
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
                      </>
                    )}
                    ListFooterComponentStyle={{
                      justifyContent: 'center',
                      alignContent: 'center',
                    }}
                    keyExtractor={(item) => item.name}
                  />
                </View>
              </LinearGradient>
            </ImageBackground>
            {/* Films */}
            <ImageBackground
              source={require('../../../assets/images/home/films.jpg')}
              style={styles.otherBackgrounds}
              imageStyle={{ height: '100%' }}
            >
              <LinearGradient
                colors={['#121212', 'rgba(18,18,18,0.5)', '#121212']}
                style={{ flex: 1, justifyContent: 'flex-end' }}
              >
                <View style={styles.sessions}>
                  <Sessions
                    title="Films"
                    isPressable
                    onPress={() =>
                      navigator.navigate('List', {
                        url: 'films',
                        title: 'Films',
                        type: 'film',
                      })
                    }
                  >
                    <Ionicons
                      name="film-outline"
                      color={theme.primary}
                      size={30}
                      style={{ marginRight: 10 }}
                    />
                  </Sessions>
                  <FlatList
                    horizontal
                    overScrollMode="always"
                    data={films}
                    renderItem={({ item }) => (
                      <SquareCard
                        type={{
                          title: item.title,
                          type: 'film',
                          director: item.director,
                          episode: item.episode_id,
                          date: item.release_date,
                        }}
                        onPress={() =>
                          navigator.navigate('Details', {
                            url: item.url,
                            type: 'film',
                          })
                        }
                      />
                    )}
                    ListFooterComponent={() => (
                      <>
                        {films && films.length > 0 && (
                          <TouchableHighlight
                            style={styles.moreContainer}
                            onPress={() =>
                              navigator.navigate('List', {
                                url: 'films',
                                title: 'Films',
                                type: 'film',
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
                      </>
                    )}
                    ListFooterComponentStyle={{
                      justifyContent: 'center',
                      alignContent: 'center',
                    }}
                    keyExtractor={(item) => item.title}
                  />
                </View>
              </LinearGradient>
            </ImageBackground>
            {/* Vehicles */}
            <ImageBackground
              source={require('../../../assets/images/home/vehicles.jpg')}
              style={styles.otherBackgrounds}
              imageStyle={{ height: '100%' }}
            >
              <LinearGradient
                colors={['#121212', 'rgba(18,18,18,0.5)', '#121212']}
                style={{ flex: 1, justifyContent: 'flex-end' }}
              >
                <View style={styles.sessions}>
                  <Sessions
                    title="Vehicles"
                    isPressable
                    onPress={() =>
                      navigator.navigate('List', {
                        url: 'vehicles',
                        title: 'Vehicles',
                        type: 'vehicle',
                      })
                    }
                  >
                    <Ionicons
                      name="car-outline"
                      color={theme.primary}
                      size={30}
                      style={{ marginRight: 10 }}
                    />
                  </Sessions>
                  <FlatList
                    horizontal
                    overScrollMode="always"
                    data={vehicles}
                    renderItem={({ item }) => (
                      <SquareCard
                        type={{
                          title: item.name,
                          type: 'automobile',
                          cost: item.cost_in_credits,
                          passengers: item.passengers,
                          crew: item.crew,
                        }}
                        onPress={() =>
                          navigator.navigate('Details', {
                            url: item.url,
                            type: 'vehicle',
                          })
                        }
                      />
                    )}
                    ListFooterComponent={() => (
                      <>
                        {vehicles && vehicles.length > 0 && (
                          <TouchableHighlight
                            style={styles.moreContainer}
                            onPress={() =>
                              navigator.navigate('List', {
                                url: 'vehicles',
                                title: 'Vehicles',
                                type: 'vehicle',
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
                      </>
                    )}
                    ListFooterComponentStyle={{
                      justifyContent: 'center',
                      alignContent: 'center',
                    }}
                    keyExtractor={(item) => item.name}
                  />
                </View>
              </LinearGradient>
            </ImageBackground>
            {/* Starships */}
            <ImageBackground
              source={require('../../../assets/images/home/starships.jpg')}
              style={styles.otherBackgrounds}
              imageStyle={{ height: '100%' }}
            >
              <LinearGradient
                colors={['#121212', 'rgba(18,18,18,0.4)', '#121212']}
                style={{ flex: 1, justifyContent: 'flex-end' }}
              >
                <View style={styles.sessions}>
                  <Sessions
                    title="Starships"
                    isPressable
                    onPress={() =>
                      navigator.navigate('List', {
                        url: 'starships',
                        title: 'Starships',
                        type: 'starship',
                      })
                    }
                  >
                    <Ionicons
                      name="rocket-outline"
                      color={theme.primary}
                      size={30}
                      style={{ marginRight: 10 }}
                    />
                  </Sessions>
                  <FlatList
                    horizontal
                    overScrollMode="always"
                    data={starships}
                    renderItem={({ item }) => (
                      <SquareCard
                        type={{
                          title: item.name,
                          type: 'automobile',
                          cost: item.cost_in_credits,
                          passengers: item.passengers,
                          crew: item.crew,
                        }}
                        onPress={() =>
                          navigator.navigate('Details', {
                            url: item.url,
                            type: 'starship',
                          })
                        }
                      />
                    )}
                    ListFooterComponent={() => (
                      <>
                        {planets && planets.length > 0 && (
                          <TouchableHighlight
                            style={styles.moreContainer}
                            onPress={() =>
                              navigator.navigate('List', {
                                url: 'starships',
                                title: 'Starships',
                                type: 'starship',
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
                      </>
                    )}
                    ListFooterComponentStyle={{
                      justifyContent: 'center',
                      alignContent: 'center',
                    }}
                    keyExtractor={(item) => item.name}
                  />
                </View>
              </LinearGradient>
            </ImageBackground>
          </ScrollView>
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

  otherBackgrounds: {
    flex: 1,
    minHeight: 450,
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
