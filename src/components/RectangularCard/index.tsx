import { Fontisto, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fonts, theme } from '../../theme';

export interface Character {
  title: string;
  type: 'character';
  specie: string;
  gender: string;
  birthday: string;
  weight: string;
  height: string;
  homeworld: string;
}

export interface Planets {
  title: string;
  type: 'planet';
  population: string;
  characters: number;
  climate: string;
  rotationPeriod: string;
  diameter: string;
  water: string;
}

export interface CardProps {
  type: Character | Planets;
}

const iconSize = 20;

const RectangularCard: React.FC<CardProps> = ({ type }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        <Text
          style={{ fontFamily: fonts.aure, fontSize: 10, color: theme.primary }}
        >
          {type.title}
        </Text>
        <Text style={{ fontFamily: fonts.bebas, fontSize: 24, color: 'white' }}>
          {type.title}
        </Text>
      </View>
      <View style={styles.content}>
        {type.type === 'character' && (
          <View>
            <View style={styles.details}>
              <Fontisto name="dna" size={iconSize} color={theme.primary} />
              <Text style={styles.detailsText}>{type.specie}</Text>
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
          </View>
        )}
        {type.type === 'planet' && (
          <View>
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
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.cardBackground,
    marginBottom: 5,
    height: 190,
    borderRadius: 20,
    opacity: 0.8,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
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
export default RectangularCard;
