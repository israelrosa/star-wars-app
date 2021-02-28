import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
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
  const [recents, setRecents] = useState(true);
  const [nextPage, setNextPage] = useState('');
  const navigator = useNavigation();
  const router = useRoute<RouteParams>();
  const planetSelector = useSelector<PlanetsSelector, Planets[]>(
    ({ planets }) => planets.planets,
  );
  const characterSelector = useSelector<CharacterSelector, Characters[]>(
    ({ characters }) => characters.characters,
  );

  function useIsMountedRef(): React.MutableRefObject<boolean> {
    const isMountedRef = useRef(true);
    useEffect(() => {
      isMountedRef.current = true;
      return () => {
        isMountedRef.current = false;
      };
    }, []);
    return isMountedRef;
  }
  const MountedRef = useIsMountedRef();

  const ApiLoad = useCallback(async () => {
    if (router.params.url === 'people') {
      const result = await api.get<ResponseCharacters>(router.params.url);
      setData(result.data.results);
      setNextPage(result.data.next);
    } else {
      const result = await api.get<ResponsePlanets>(router.params.url);
      setData(result.data.results);
      setNextPage(result.data.next);
    }
  }, [router.params.url]);

  useEffect(() => {
    router.params && MountedRef && ApiLoad();
  }, [router.params, MountedRef, ApiLoad]);

  const HandleSearch = (search: string): void => {
    router.params &&
      (() => {
        if (search.length > 0) {
          setRecents(false);
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
          setRecents(true);
        }
      })();
  };

  const LoadNextPage = (): void => {
    router.params &&
      nextPage &&
      (async () => {
        if (router.params.url === 'people') {
          const result = await api.get<ResponseCharacters>(nextPage);
          const previousData = data?.slice() as Characters[];
          setData(previousData.concat(result.data.results));
          setNextPage(result.data.next);
        } else {
          const result = await api.get<ResponsePlanets>(nextPage);
          const previousData = data?.slice() as Planets[];
          setData(previousData.concat(result.data.results));
          setNextPage(result.data.next);
        }
      })();
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
                  {recents && characterSelector.length > 0 && (
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
              onEndReachedThreshold={0.6}
            />
          )}
          {router.params?.url === 'planets' && (
            <FlatList
              overScrollMode="always"
              ListHeaderComponent={() => (
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
              onEndReachedThreshold={0.6}
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
