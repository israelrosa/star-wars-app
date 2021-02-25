import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import RectangularCard, {
  CardProps as RecCardProps,
} from '../../components/RectangularCard';
import Sessions from '../../components/Sessions';
import SquareCard, { CardProps } from '../../components/SquareCard';
import { theme } from '../../theme';

const List: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title="Characters" />
      <ImageBackground
        source={require('../../../assets/images/characters.jpg')}
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
                <Sessions title="Recents" />
                <FlatList
                  horizontal
                  overScrollMode="always"
                  data={
                    [
                      {
                        type: {
                          title: 'Anakin',
                          type: 'character',
                          birthday: '19BBY',
                          gender: 'male',
                          specie: 'human',
                        },
                      },
                      {
                        type: {
                          title: 'Ahsoka',
                          type: 'character',
                          birthday: '19BBY',
                          gender: 'male',
                          specie: 'human',
                        },
                      },
                    ] as CardProps[]
                  }
                  renderItem={({ item }) => (
                    <>
                      {item.type.type === 'character' ? (
                        <SquareCard
                          type={{
                            title: item.type.title,
                            type: item.type.type,
                            birthday: item.type.birthday,
                            gender: item.type.gender,
                            specie: item.type.specie,
                          }}
                        />
                      ) : (
                        <SquareCard
                          type={{
                            title: item.type.title,
                            type: item.type.type,
                            climate: item.type.climate,
                            population: item.type.population,
                            characters: item.type.characters,
                          }}
                        />
                      )}
                    </>
                  )}
                  keyExtractor={(item) => item.type.title}
                  style={{ marginBottom: 20 }}
                />
                <Sessions title="All" />
              </>
            )}
            data={
              [
                {
                  type: {
                    title: 'Anakin',
                    type: 'character',
                    birthday: '19BBY',
                    gender: 'male',
                    specie: 'human',
                    height: '24',
                    homeworld: 'Tatooine',
                    weight: '39',
                  },
                },
                {
                  type: {
                    title: 'Ahsoka',
                    type: 'character',
                    birthday: '19BBY',
                    height: '24',
                    homeworld: 'Tatooine',
                    gender: 'male',
                    specie: 'human',
                    weight: '39',
                  },
                },
                {
                  type: {
                    title: 'Ahs',
                    type: 'character',
                    birthday: '19BBY',
                    gender: 'male',
                    specie: 'human',
                    height: '24',
                    homeworld: 'Tatooine',
                    weight: '39',
                  },
                },
              ] as RecCardProps[]
            }
            renderItem={({ item }) => (
              <>
                {item.type.type === 'character' ? (
                  <RectangularCard
                    type={{
                      title: item.type.title,
                      type: item.type.type,
                      birthday: item.type.birthday,
                      gender: item.type.gender,
                      specie: item.type.specie,
                      height: item.type.height,
                      homeworld: item.type.homeworld,
                      weight: item.type.weight,
                    }}
                  />
                ) : (
                  <RectangularCard
                    type={{
                      title: item.type.title,
                      type: item.type.type,
                      climate: item.type.climate,
                      population: item.type.population,
                      characters: item.type.characters,
                      diameter: item.type.diameter,
                      rotationPeriod: item.type.rotationPeriod,
                      water: item.type.water,
                    }}
                  />
                )}
              </>
            )}
            keyExtractor={(item) => item.type.title}
            style={{ marginHorizontal: 5 }}
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
