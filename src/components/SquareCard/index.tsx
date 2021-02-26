import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import api from '../../services/api';
import { fonts, theme } from '../../theme';

interface Character {
  title: string;
  type: 'character';
  height: string;
  gender: string;
  birthday: string;
}

interface Planets {
  title: string;
  type: 'planet';
  population: string;
  characters: number;
  climate: string;
}

export interface CardProps {
  type: Character | Planets;
}

const iconSize = 20;

const SquareCard: React.FC<CardProps> = ({ type }) => {
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
          <>
            <View style={styles.details}>
              <Ionicons
                name="code-outline"
                size={iconSize}
                color={theme.primary}
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.cardBackground,
    minWidth: 150,
    maxWidth: 200,
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
