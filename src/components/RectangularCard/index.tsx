import { Ionicons } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native-gesture-handler';
import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fonts, theme } from '../../theme';

interface Types {
  title: string;
  gender: string;
  birthday: string;
  height: string;
  weight: string;
  eyesColor: string;
  skinColor: string;
  population: string;
  characters: number;
  climate: string;
  rotationPeriod: string;
  diameter: string;
  water: string;
  language: string;
  averangeLife: string;
  averangeHeight: string;
  classification: string;
  designation: string;
  abstract: string;
  cost: string;
  passengers: string;
  crew: string;
  speed: string;
  capacity: string;
  lenght: string;
}
interface CardProps {
  type: Types;
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
          {type.abstract && (
            <Text
              numberOfLines={5}
              style={{ color: 'white', flex: 1, fontFamily: fonts.osw }}
            >
              {type.abstract}
            </Text>
          )}

          <View>
            {type.gender && (
              <View style={styles.details}>
                <Ionicons
                  name="male-female-outline"
                  size={iconSize}
                  color={theme.primary}
                />
                <Text style={styles.detailsText}>{type.gender}</Text>
              </View>
            )}
            {type.birthday && (
              <View style={styles.details}>
                <Ionicons
                  name="calendar-outline"
                  size={iconSize}
                  color={theme.primary}
                />
                <Text style={styles.detailsText}>{type.birthday}</Text>
              </View>
            )}
            {type.population && (
              <View style={styles.details}>
                <Ionicons
                  name="people-outline"
                  size={iconSize}
                  color={theme.primary}
                />
                <Text style={styles.detailsText}>{type.population}</Text>
              </View>
            )}
            {type.characters !== undefined && (
              <View style={styles.details}>
                <Ionicons
                  name="man-outline"
                  size={iconSize}
                  color={theme.primary}
                />
                <Text style={styles.detailsText}>{type.characters}</Text>
              </View>
            )}
            {type.language && (
              <View style={styles.details}>
                <Ionicons
                  name="language-outline"
                  size={iconSize}
                  color={theme.primary}
                />
                <Text style={styles.detailsText}>{type.language}</Text>
              </View>
            )}
            {type.averangeHeight && (
              <View style={styles.details}>
                <Ionicons
                  name="code-outline"
                  size={iconSize}
                  color={theme.primary}
                  style={{ transform: [{ rotateZ: '90deg' }] }}
                />
                <Text style={styles.detailsText}>{type.averangeHeight}</Text>
              </View>
            )}
            {type.passengers && (
              <View style={styles.details}>
                <Ionicons
                  name="people-outline"
                  size={iconSize}
                  color={theme.primary}
                />
                <Text style={styles.detailsText}>{type.passengers}</Text>
              </View>
            )}
            {type.crew && (
              <View style={styles.details}>
                <Ionicons
                  name="briefcase-outline"
                  size={iconSize}
                  color={theme.primary}
                />
                <Text style={styles.detailsText}>{type.crew}</Text>
              </View>
            )}
          </View>

          <View>
            {type.height && (
              <View style={styles.details}>
                <Ionicons
                  name="code-outline"
                  size={iconSize}
                  color={theme.primary}
                  style={{ transform: [{ rotateZ: '90deg' }] }}
                />
                <Text style={styles.detailsText}>{type.height}</Text>
              </View>
            )}
            {type.weight && (
              <View style={styles.details}>
                <Ionicons
                  name="barbell-outline"
                  size={iconSize}
                  color={theme.primary}
                />
                <Text style={styles.detailsText}>{type.weight}</Text>
              </View>
            )}
            {type.rotationPeriod && (
              <View style={styles.details}>
                <Ionicons
                  name="reload-outline"
                  size={iconSize}
                  color={theme.primary}
                />
                <Text style={styles.detailsText}>{type.rotationPeriod}</Text>
              </View>
            )}
            {type.diameter && (
              <View style={styles.details}>
                <Ionicons
                  name="resize-outline"
                  size={iconSize}
                  color={theme.primary}
                />
                <Text style={styles.detailsText}>{type.diameter}</Text>
              </View>
            )}
            {type.averangeLife && (
              <View style={styles.details}>
                <Ionicons
                  name="heart-outline"
                  size={iconSize}
                  color={theme.primary}
                />
                <Text style={styles.detailsText}>{type.averangeLife}</Text>
              </View>
            )}
            {type.designation && (
              <View style={styles.details}>
                <Ionicons
                  name="briefcase-outline"
                  size={iconSize}
                  color={theme.primary}
                />
                <Text style={styles.detailsText}>{type.designation}</Text>
              </View>
            )}
            {type.cost && (
              <View style={styles.details}>
                <Ionicons
                  name="pricetag-outline"
                  size={iconSize}
                  color={theme.primary}
                />
                <Text style={styles.detailsText}>{type.cost}</Text>
              </View>
            )}
            {type.lenght && (
              <View style={styles.details}>
                <Ionicons
                  name="code-outline"
                  size={iconSize}
                  color={theme.primary}
                />
                <Text style={styles.detailsText}>{type.lenght}</Text>
              </View>
            )}
          </View>

          <View>
            {type.eyesColor && (
              <View style={styles.details}>
                <Ionicons
                  name="eye-outline"
                  size={iconSize}
                  color={theme.primary}
                />
                <Text style={styles.detailsText}>{type.eyesColor}</Text>
              </View>
            )}
            {type.skinColor && (
              <View style={styles.details}>
                <Ionicons
                  name="color-palette-outline"
                  size={iconSize}
                  color={theme.primary}
                />
                <Text style={styles.detailsText}>{type.skinColor}</Text>
              </View>
            )}
            {type.water && (
              <View style={styles.details}>
                <Ionicons
                  name="water-outline"
                  size={iconSize}
                  color={theme.primary}
                />
                <Text style={styles.detailsText}>{type.water}</Text>
              </View>
            )}
            {type.climate && (
              <View style={styles.details}>
                <Ionicons
                  name="cloud-outline"
                  size={iconSize}
                  color={theme.primary}
                />
                <Text style={styles.detailsText}>{type.climate}</Text>
              </View>
            )}
            {type.classification && (
              <View style={styles.details}>
                <Ionicons
                  name="paw-outline"
                  size={iconSize}
                  color={theme.primary}
                />
                <Text style={styles.detailsText}>{type.classification}</Text>
              </View>
            )}
            {type.speed && (
              <View style={styles.details}>
                <Ionicons
                  name="speedometer-outline"
                  size={iconSize}
                  color={theme.primary}
                />
                <Text style={styles.detailsText}>{type.speed}</Text>
              </View>
            )}
            {type.capacity && (
              <View style={styles.details}>
                <Ionicons
                  name="expand-outline"
                  size={iconSize}
                  color={theme.primary}
                />
                <Text style={styles.detailsText}>{type.capacity}</Text>
              </View>
            )}
          </View>
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
export default memo(RectangularCard);
