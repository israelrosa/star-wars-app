import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { fonts, theme } from '../../theme';
import All from '../../interfaces/All';

interface CardProps {
  data: All;
  onPress: () => void | undefined;
}

const iconSize = 20;

const SquareCard: React.FC<CardProps> = ({ data, onPress }) => {
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
            {data.title || data.name}
          </Text>
          <Text
            style={{ fontFamily: fonts.bebas, fontSize: 24, color: 'white' }}
          >
            {data.name || data.title}
          </Text>
        </View>
        <View style={styles.content}>
          {data.height && (
            <View style={styles.details}>
              <Ionicons
                name="code-outline"
                size={iconSize}
                color={theme.primary}
                style={{ transform: [{ rotateZ: '90deg' }] }}
              />
              <Text style={styles.detailsText}>{data.height}</Text>
            </View>
          )}
          {data.gender && (
            <View style={styles.details}>
              <Ionicons
                name="male-female-outline"
                size={iconSize}
                color={theme.primary}
              />
              <Text style={styles.detailsText}>{data.gender}</Text>
            </View>
          )}
          {data.birth_year && (
            <View style={styles.details}>
              <Ionicons
                name="calendar-outline"
                size={iconSize}
                color={theme.primary}
              />
              <Text style={styles.detailsText}>{data.birth_year}</Text>
            </View>
          )}
          {data.population && (
            <View style={styles.details}>
              <Ionicons
                name="people-outline"
                size={iconSize}
                color={theme.primary}
              />
              <Text style={styles.detailsText}>{data.population}</Text>
            </View>
          )}
          {data.residents && (
            <View style={styles.details}>
              <Ionicons
                name="man-outline"
                size={iconSize}
                color={theme.primary}
              />
              <Text style={styles.detailsText}>{data.residents.length}</Text>
            </View>
          )}
          {data.climate && (
            <View style={styles.details}>
              <Ionicons
                name="cloud-outline"
                size={iconSize}
                color={theme.primary}
              />
              <Text style={styles.detailsText}>{data.climate}</Text>
            </View>
          )}
          {data.language && (
            <View style={styles.details}>
              <Ionicons
                name="language-outline"
                size={iconSize}
                color={theme.primary}
              />
              <Text style={styles.detailsText}>{data.language}</Text>
            </View>
          )}
          {data.average_lifespan && (
            <View style={styles.details}>
              <Ionicons
                name="heart-outline"
                size={iconSize}
                color={theme.primary}
              />
              <Text style={styles.detailsText}>{data.average_lifespan}</Text>
            </View>
          )}
          {data.average_height && (
            <View style={styles.details}>
              <Ionicons
                name="code-outline"
                size={iconSize}
                color={theme.primary}
                style={{ transform: [{ rotateZ: '90deg' }] }}
              />
              <Text style={styles.detailsText}>{data.average_height}</Text>
            </View>
          )}
          {data.director && (
            <View style={styles.details}>
              <Ionicons
                name="clipboard-outline"
                size={iconSize}
                color={theme.primary}
              />
              <Text style={styles.detailsText}>{data.director}</Text>
            </View>
          )}
          {data.episode_id && (
            <View style={styles.details}>
              <Ionicons
                name="albums-outline"
                size={iconSize}
                color={theme.primary}
              />
              <Text style={styles.detailsText}>{data.episode_id}</Text>
            </View>
          )}
          {data.release_date && (
            <View style={styles.details}>
              <Ionicons
                name="calendar-outline"
                size={iconSize}
                color={theme.primary}
              />
              <Text style={styles.detailsText}>{data.release_date}</Text>
            </View>
          )}
          {data.cost_in_credits && (
            <View style={styles.details}>
              <Ionicons
                name="pricetag-outline"
                size={iconSize}
                color={theme.primary}
              />
              <Text style={styles.detailsText}>{data.cost_in_credits}</Text>
            </View>
          )}
          {data.passengers && (
            <View style={styles.details}>
              <Ionicons
                name="people-outline"
                size={iconSize}
                color={theme.primary}
              />
              <Text style={styles.detailsText}>{data.passengers}</Text>
            </View>
          )}
          {data.crew && (
            <View style={styles.details}>
              <Ionicons
                name="briefcase-outline"
                size={iconSize}
                color={theme.primary}
              />
              <Text style={styles.detailsText}>{data.crew}</Text>
            </View>
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
