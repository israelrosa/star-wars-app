import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { fonts, theme } from '../../theme';

interface Character {
  title: string;
  type: 'character';
  height: string;
  gender: string;
  birthday: string;
}
interface Planet {
  title: string;
  type: 'planet';
  population: string;
  characters: number;
  climate: string;
}
interface Specie {
  title: string;
  type: 'specie';
  language: string;
  averangeLife: string;
  averangeHeight: string;
}
interface Film {
  title: string;
  type: 'film';
  director: string;
  episode: number;
  date: string;
}
interface Automobiles {
  title: string;
  type: 'automobile';
  cost: string;
  passengers: string;
  crew: string;
}

interface CardProps {
  type: Character | Planet | Specie | Film | Automobiles;
  onPress: () => void | undefined;
}

const iconSize = 20;

const SquareCard: React.FC<CardProps> = ({ type, onPress }) => {
  return (
    <TouchableHighlight style={styles.container} onPress={onPress}>
      <View>
        <View style={styles.titleBar}>
          <Text
            style={{
              fontFamily: fonts.aure,
              fontSize: 10,
              color: theme.primary,
            }}
          >
            {type.title}
          </Text>
          <Text
            style={{ fontFamily: fonts.bebas, fontSize: 24, color: 'white' }}
          >
            {type.title}
          </Text>
        </View>
        <View style={styles.content}>
          {type.type === 'character' && (
            <>
              <View style={styles.details}>
                <Ionicons
                  name="code-outline"
                  size={iconSize}
                  color={theme.primary}
                  style={{ transform: [{ rotateZ: '90deg' }] }}
                />
                <Text style={styles.detailsText}>{type.height}</Text>
              </View>
              <View style={styles.details}>
                <Ionicons
                  name="male-female-outline"
                  size={iconSize}
                  color={theme.primary}
                />
                <Text style={styles.detailsText}>{type.gender}</Text>
              </View>
              <View style={styles.details}>
                <Ionicons
                  name="calendar-outline"
                  size={iconSize}
                  color={theme.primary}
                />
                <Text style={styles.detailsText}>{type.birthday}</Text>
              </View>
            </>
          )}
          {type.type === 'planet' && (
            <>
              <View style={styles.details}>
                <Ionicons
                  name="people-outline"
                  size={iconSize}
                  color={theme.primary}
                />
                <Text style={styles.detailsText}>{type.population}</Text>
              </View>
              <View style={styles.details}>
                <Ionicons
                  name="man-outline"
                  size={iconSize}
                  color={theme.primary}
                />
                <Text style={styles.detailsText}>{type.characters}</Text>
              </View>
              <View style={styles.details}>
                <Ionicons
                  name="cloud-outline"
                  size={iconSize}
                  color={theme.primary}
                />
                <Text style={styles.detailsText}>{type.climate}</Text>
              </View>
            </>
          )}
          {type.type === 'specie' && (
            <>
              <View style={styles.details}>
                <Ionicons
                  name="language-outline"
                  size={iconSize}
                  color={theme.primary}
                />
                <Text style={styles.detailsText}>{type.language}</Text>
              </View>
              <View style={styles.details}>
                <Ionicons
                  name="heart-outline"
                  size={iconSize}
                  color={theme.primary}
                />
                <Text style={styles.detailsText}>{type.averangeLife}</Text>
              </View>
              <View style={styles.details}>
                <Ionicons
                  name="code-outline"
                  size={iconSize}
                  color={theme.primary}
                  style={{ transform: [{ rotateZ: '90deg' }] }}
                />
                <Text style={styles.detailsText}>{type.averangeHeight}</Text>
              </View>
            </>
          )}
          {type.type === 'film' && (
            <>
              <View style={styles.details}>
                <Ionicons
                  name="clipboard-outline"
                  size={iconSize}
                  color={theme.primary}
                />
                <Text style={styles.detailsText}>{type.director}</Text>
              </View>
              <View style={styles.details}>
                <Ionicons
                  name="albums-outline"
                  size={iconSize}
                  color={theme.primary}
                />
                <Text style={styles.detailsText}>{type.episode}</Text>
              </View>
              <View style={styles.details}>
                <Ionicons
                  name="calendar-outline"
                  size={iconSize}
                  color={theme.primary}
                />
                <Text style={styles.detailsText}>{type.date}</Text>
              </View>
            </>
          )}
          {type.type === 'automobile' && (
            <>
              <View style={styles.details}>
                <Ionicons
                  name="pricetag-outline"
                  size={iconSize}
                  color={theme.primary}
                />
                <Text style={styles.detailsText}>{type.cost}</Text>
              </View>
              <View style={styles.details}>
                <Ionicons
                  name="people-outline"
                  size={iconSize}
                  color={theme.primary}
                />
                <Text style={styles.detailsText}>{type.passengers}</Text>
              </View>
              <View style={styles.details}>
                <Ionicons
                  name="briefcase-outline"
                  size={iconSize}
                  color={theme.primary}
                />
                <Text style={styles.detailsText}>{type.crew}</Text>
              </View>
            </>
          )}
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.cardBackground,
    minWidth: 150,
    maxWidth: 300,
    borderRadius: 20,
    opacity: 0.8,
    marginLeft: 5,
  },

  titleBar: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: theme.cardLine,
  },

  content: {
    marginVertical: 10,
    marginHorizontal: 15,
  },

  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  detailsText: {
    fontFamily: fonts.osw,
    fontSize: 14,
    marginLeft: 5,
    color: 'white',
  },
});

export default SquareCard;
