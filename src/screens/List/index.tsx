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
import Characters from '../../interfaces/Characters';
import Planets from '../../interfaces/Planets';
import api from '../../services/api';
import { CharacterHistoryState } from '../../store/types/characterTypes';
import { PlanetHistoryState } from '../../store/types/planetTypes';
import { theme } from '../../theme';

type RootParams = {
  List: { url: string; title: string };
};
type RouteParams = RouteProp<RootParams, 'List'>;

type ResponsePlanets = {
  next: string;
  results: Planets[];
};

type ResponseCharacters = {
  next: string;
  results: Characters[];
};

type CharacterSelector = { characters: CharacterHistoryState };
type PlanetsSelector = { planets: PlanetHistoryState };

const List: React.FC = () => {
  const [data, setData] = useState<Planets[] | Characters[]>();
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

  const ApiLoad = useCallback(async () => {
    setIsLoading(true);
    if (router.params.url === 'people') {
      const result = await api.get<ResponseCharacters>(router.params.url);
      setData(result.data.results);
      setNextPage(result.data.next);
    } else {
      const result = await api.get<ResponsePlanets>(router.params.url);
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
            if (router.params.url === 'people') {
              const result = await api.get<ResponseCharacters>(
                `people/?search=${search}`,
              );
              setData(result.data.results);
              setNextPage(result.data.next);
            } else {
              const result = await api.get<ResponsePlanets>(
                `planets/?search=${search}`,
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
        if (router.params.url === 'people') {
          const result = await api.get<ResponseCharacters>(nextPage);
          const previousData = data?.slice() as Characters[];
          setData(previousData.concat(result.data.results));
          setNextPage(result.data.next);
          setIsLoading(false);
        } else {
          const result = await api.get<ResponsePlanets>(nextPage);
          const previousData = data?.slice() as Planets[];
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
          router.params?.title === 'Characters'
            ? require('../../../assets/images/characters.jpg')
            : require('../../../assets/images/planets.jpg')
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
          {router.params?.url === 'people' && (
            <FlatList
              overScrollMode="always"
              ListHeaderComponent={() => (
                <>
                  {!isSearch && characterSelector.length > 0 && (
                    <>
                      <Sessions title="Recents" />
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
                      <Sessions title="All" />
                    </>
                  )}
                </>
              )}
              data={data as Characters[]}
              renderItem={({ item }) => (
                <RectangularCard
                  type={{
                    title: item.name,
                    type: 'character',
                    birthday: item.birth_year,
                    gender: item.gender,
                    height: item.height,
                    eyesColor: item.eye_color,
                    skinColor: item.skin_color,
                    weight: item.mass,
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
          )}
          {router.params?.url === 'planets' && (
            <FlatList
              overScrollMode="always"
              ListHeaderComponent={() => (
                <>
                  {!isSearch && planetSelector.length > 0 && (
                    <>
                      <Sessions title="Recents" />
                      <FlatList
                        horizontal
                        overScrollMode="always"
                        data={planetSelector}
                        renderItem={({ item }) => (
                          <SquareCard
                            type={{
                              title: item.name,
                              type: 'planet',
                              characters: item.residents.length,
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
                      <Sessions title="All" />
                    </>
                  )}
                </>
              )}
              data={data as Planets[]}
              renderItem={({ item }) => (
                <RectangularCard
                  type={{
                    title: item.name,
                    type: 'planet',
                    characters: item.residents.length,
                    climate: item.climate,
                    diameter: item.diameter,
                    population: item.population,
                    rotationPeriod: item.rotation_period,
                    water: item.surface_water,
                  }}
                  onPress={() =>
                    navigator.navigate('Details', {
                      url: item.url,
                      type: 'planet',
                    })
                  }
                />
              )}
              onEndReached={() => LoadNextPage()}
              onEndReachedThreshold={0.3}
              ListFooterComponent={() => (
                <>
                  {isLoading && (
                    <>
                      <Loading />
                    </>
                  )}
                </>
              )}
              ListFooterComponentStyle={{ marginTop: 20, height: 100 }}
              keyExtractor={(item) => item.name}
              style={{ marginHorizontal: 5 }}
            />
          )}
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
