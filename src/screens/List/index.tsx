import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import {
  Dimensions,
  ImageBackground,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import RectangularCard from '../../components/RectangularCard';
import Sessions from '../../components/Sessions';
import SquareCard from '../../components/SquareCard';
import All from '../../interfaces/All';
import Characters from '../../interfaces/Characters';
import Films from '../../interfaces/Films';
import Planets from '../../interfaces/Planets';
import Species from '../../interfaces/Species';
import Starships from '../../interfaces/Starships';
import Vehicles from '../../interfaces/Vehicles';
import api from '../../services/api';
import { CharacterHistoryState } from '../../store/types/characterTypes';
import { FilmHistoryState } from '../../store/types/filmTypes';
import { PlanetHistoryState } from '../../store/types/planetTypes';
import { SpecieHistoryState } from '../../store/types/specieTypes';
import { StarshipHistoryState } from '../../store/types/starshipTypes';
import { VehicleHistoryState } from '../../store/types/vehicleTypes';
import { theme } from '../../theme';

type RootParams = {
  List: {
    url: string;
    title: string;
    type: 'character' | 'planet' | 'specie' | 'film' | 'vehicle' | 'starship';
  };
};
type RouteParams = RouteProp<RootParams, 'List'>;

type Response = {
  next: string;
  results: All[];
};

type CharacterSelector = { characters: CharacterHistoryState };
type PlanetsSelector = { planets: PlanetHistoryState };
type SpeciesSelector = { species: SpecieHistoryState };
type FilmsSelector = { films: FilmHistoryState };
type VehiclesSelector = { vehicles: VehicleHistoryState };
type StarshipsSelector = { starships: StarshipHistoryState };

const List: React.FC = () => {
  const [data, setData] = useState<All[]>([]);
  const [isSearch, setIsSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPage, setNextPage] = useState('');
  const navigator = useNavigation();
  const router = useRoute<RouteParams>();
  const planetSelector = useSelector<PlanetsSelector, Planets[]>(
    ({ planets }) => planets.planets,
  );
  const characterSelector = useSelector<CharacterSelector, Characters[]>(
    ({ characters }) => characters.characters,
  );
  const specieSelector = useSelector<SpeciesSelector, Species[]>(
    ({ species }) => species.species,
  );
  const filmSelector = useSelector<FilmsSelector, Films[]>(
    ({ films }) => films.films,
  );
  const vehicleSelector = useSelector<VehiclesSelector, Vehicles[]>(
    ({ vehicles }) => vehicles.vehicles,
  );
  const starshipSelector = useSelector<StarshipsSelector, Starships[]>(
    ({ starships }) => starships.starships,
  );

  const ApiLoad = useCallback(async () => {
    setIsLoading(true);
    if (router.params.url) {
      const result = await api.get(router.params.url);
      setData(result.data.results);
      setNextPage(result.data.next);
    }
    setIsLoading(false);
  }, [router.params.url]);

  useEffect(() => {
    let isUnmounted = false;
    router.params && !isUnmounted && ApiLoad();

    return () => {
      isUnmounted = true;
    };
  }, [router.params, ApiLoad]);

  const HandleSearch = (search: string): void => {
    setIsLoading(false);
    router.params &&
      (() => {
        if (search.length > 0) {
          setIsSearch(true);
          (async () => {
            if (router.params.url) {
              const result = await api.get<Response>(
                `${router.params.url}/?search=${search}`,
              );
              setData(result.data.results);
              setNextPage(result.data.next);
            }
          })();
        } else {
          ApiLoad();
          setIsSearch(false);
        }
      })();
  };

  const LoadNextPage = (): void => {
    setIsLoading(true);
    if (router.params && nextPage) {
      (async () => {
        if (router.params.url) {
          const result = await api.get<Response>(nextPage);
          const previousData = data?.slice();
          setData(previousData.concat(result.data.results));
          setNextPage(result.data.next);
          setIsLoading(false);
        }
      })();
    } else {
      setIsLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <Header
        title={router.params ? router.params.title : undefined}
        goBack
        onPress={() => navigator.goBack()}
        onSubmit={(text) => HandleSearch(text)}
      />
      <ImageBackground
        source={
          (router.params?.title === 'Characters' &&
            require('../../../assets/images/list/characters.jpg')) ||
          (router.params?.title === 'Planets' &&
            require('../../../assets/images/list/planets.jpg')) ||
          (router.params?.title === 'Species' &&
            require('../../../assets/images/list/species.jpg')) ||
          (router.params?.title === 'Films' &&
            require('../../../assets/images/list/films.jpg')) ||
          (router.params?.title === 'Vehicles' &&
            require('../../../assets/images/list/vehicles.jpg')) ||
          (router.params?.title === 'Starships' &&
            require('../../../assets/images/list/starships.jpg'))
        }
        style={styles.ImageBackground}
        imageStyle={{
          height:
            Dimensions.get('window').height / 2 +
            (StatusBar.currentHeight as number) +
            80,
        }}
      >
        <View style={styles.sessions}>
          <FlatList
            overScrollMode="always"
            ListHeaderComponent={() => (
              <>
                {!isSearch && (
                  <>
                    <Sessions title="Recents" />
                    {router.params.type === 'character' &&
                      characterSelector?.length > 0 && (
                        <FlatList
                          horizontal
                          overScrollMode="always"
                          data={characterSelector}
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
                          style={{ marginBottom: 20 }}
                        />
                      )}
                    {router.params.type === 'planet' &&
                      planetSelector?.length > 0 && (
                        <FlatList
                          horizontal
                          overScrollMode="always"
                          data={planetSelector}
                          renderItem={({ item }) => (
                            <SquareCard
                              type={{
                                title: item.name,
                                type: 'planet',
                                characters: item.residents?.length,
                                climate: item.climate,
                                population: item.population,
                              }}
                              onPress={() =>
                                navigator.navigate('Details', {
                                  url: item.url,
                                  type: 'planet',
                                })
                              }
                            />
                          )}
                          keyExtractor={(item) => item.name}
                          style={{ marginBottom: 20 }}
                        />
                      )}
                    {router.params.type === 'specie' &&
                      specieSelector?.length > 0 && (
                        <FlatList
                          horizontal
                          overScrollMode="always"
                          data={specieSelector}
                          renderItem={({ item }) => (
                            <SquareCard
                              type={{
                                title: item.name,
                                type: 'specie',
                                averangeHeight: item.average_height,
                                averangeLife: item.average_lifespan,
                                language: item.language,
                              }}
                              onPress={() =>
                                navigator.navigate('Details', {
                                  url: item.url,
                                  type: 'specie',
                                })
                              }
                            />
                          )}
                          keyExtractor={(item) => item.name}
                          style={{ marginBottom: 20 }}
                        />
                      )}
                    {router.params.type === 'film' && filmSelector?.length > 0 && (
                      <FlatList
                        horizontal
                        overScrollMode="always"
                        data={filmSelector}
                        renderItem={({ item }) => (
                          <SquareCard
                            type={{
                              title: item.title,
                              type: 'film',
                              date: item.release_date,
                              director: item.director,
                              episode: item.episode_id,
                            }}
                            onPress={() =>
                              navigator.navigate('Details', {
                                url: item.url,
                                type: 'film',
                              })
                            }
                          />
                        )}
                        keyExtractor={(item) => item.title}
                        style={{ marginBottom: 20 }}
                      />
                    )}
                    {router.params.type === 'vehicle' &&
                      vehicleSelector?.length > 0 && (
                        <FlatList
                          horizontal
                          overScrollMode="always"
                          data={vehicleSelector}
                          renderItem={({ item }) => (
                            <SquareCard
                              type={{
                                title: item.name,
                                type: 'automobile',
                                cost: item.cost_in_credits,
                                crew: item.crew,
                                passengers: item.passengers,
                              }}
                              onPress={() =>
                                navigator.navigate('Details', {
                                  url: item.url,
                                  type: 'vehicle',
                                })
                              }
                            />
                          )}
                          keyExtractor={(item) => item.name}
                          style={{ marginBottom: 20 }}
                        />
                      )}
                    {router.params.type === 'starship' &&
                      starshipSelector?.length > 0 && (
                        <FlatList
                          horizontal
                          overScrollMode="always"
                          data={starshipSelector}
                          renderItem={({ item }) => (
                            <SquareCard
                              type={{
                                title: item.name,
                                type: 'automobile',
                                cost: item.cost_in_credits,
                                crew: item.crew,
                                passengers: item.passengers,
                              }}
                              onPress={() =>
                                navigator.navigate('Details', {
                                  url: item.url,
                                  type: 'starship',
                                })
                              }
                            />
                          )}
                          keyExtractor={(item) => item.name}
                          style={{ marginBottom: 20 }}
                        />
                      )}
                  </>
                )}
                <Sessions title="All" />
              </>
            )}
            data={data}
            renderItem={({ item }) => (
              <RectangularCard
                type={{
                  title: item.name || item.title,
                  birthday: item.birth_year,
                  gender: item.gender,
                  height: item.height,
                  eyesColor: item.eye_color,
                  skinColor: item.skin_color,
                  weight: item.mass,
                  abstract: item.opening_crawl,
                  capacity: item.cargo_capacity,
                  speed: item.max_atmosphering_speed,
                  lenght: item.length,
                  crew: item.crew,
                  passengers: item.passengers,
                  classification: item.classification,
                  designation: item.designation,
                  averangeLife: item.average_lifespan,
                  averangeHeight: item.average_height,
                  water: item.surface_water,
                  diameter: item.diameter,
                  characters: item.residents?.length,
                  cost: item.cost_in_credits,
                  climate: item.climate,
                  language: item.language,
                  population: item.population,
                  rotationPeriod: item.rotation_period,
                }}
                onPress={() =>
                  navigator.navigate('Details', {
                    url: item.url,
                    type: router.params?.type,
                  })
                }
              />
            )}
            keyExtractor={(item) => item.name ?? item.title}
            style={{ marginHorizontal: 5 }}
            onEndReached={() => LoadNextPage()}
            onEndReachedThreshold={0.3}
            ListFooterComponentStyle={{ marginTop: 20, height: 100 }}
            ListFooterComponent={() => (
              <>
                {isLoading && (
                  <>
                    <Loading />
                  </>
                )}
              </>
            )}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    position: 'relative',
    backgroundColor: theme.black,
  },

  ImageBackground: {
    flex: 1,
    width: '100%',
    paddingTop: (StatusBar.currentHeight as number) + 150,
    alignItems: 'center',
  },
  sessions: {
    width: '100%',
    flex: 1,
  },
});

export default List;
