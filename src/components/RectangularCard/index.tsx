import { Ionicons } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fonts, theme } from '../../theme';

interface Character {
  title: string;
  type: 'character';
  gender: string;
  birthday: string;
  height: string;
  weight: string;
  eyesColor: string;
  skinColor: string;
}

interface Planets {
  title: string;
  type: 'planet';
  population: string;
  characters: number;
  climate: string;
  rotationPeriod: string;
  diameter: string;
  water: string;
}

interface CardProps {
  type: Character | Planets;
  onPress: () => void | undefined;
}

const iconSize = 20;

const RectangularCard: React.FC<CardProps> = ({ type, onPress }) => {
  return (
    <TouchableHighlight style={styles.container} onPress={onPress}>
      <View>
        <View style={styles.titleBar}>
          <View>
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
          <Ionicons name="chevron-forward-outline" size={25} color="white" />
        </View>
        <View style={styles.content}>
          {type.type === 'character' && (
            <>
              <View>
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
              <View>
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
                    name="barbell-outline"
                    size={iconSize}
                    color={theme.primary}
                  />
                  <Text style={styles.detailsText}>{type.weight}</Text>
                </View>
              </View>
              <View>
                <View style={styles.details}>
                  <Ionicons
                    name="eye-outline"
                    size={iconSize}
                    color={theme.primary}
                  />
                  <Text style={styles.detailsText}>{type.eyesColor}</Text>
                </View>
                <View style={styles.details}>
                  <Ionicons
                    name="color-palette-outline"
                    size={iconSize}
                    color={theme.primary}
                  />
                  <Text style={styles.detailsText}>{type.skinColor}</Text>
                </View>
              </View>
            </>
          )}
          {type.type === 'planet' && (
            <>
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
              </View>
              <View>
                <View style={styles.details}>
                  <Ionicons
                    name="reload-outline"
                    size={iconSize}
                    color={theme.primary}
                  />
                  <Text style={styles.detailsText}>{type.rotationPeriod}</Text>
                </View>
                <View style={styles.details}>
                  <Ionicons
                    name="resize-outline"
                    size={iconSize}
                    color={theme.primary}
                  />
                  <Text style={styles.detailsText}>{type.diameter}</Text>
                </View>
              </View>
              <View>
                <View style={styles.details}>
                  <Ionicons
                    name="water-outline"
                    size={iconSize}
                    color={theme.primary}
                  />
                  <Text style={styles.detailsText}>{type.water}</Text>
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
    marginBottom: 5,
    borderRadius: 20,
    opacity: 0.8,
  },

  titleBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
