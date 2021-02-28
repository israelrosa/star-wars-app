import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fonts, theme } from '../../theme';

interface Props {
  title: string;
  icon: any;
}

const DetailCard: React.FC<Props> = ({ children, title, icon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        <Ionicons name={icon} size={30} color={theme.primary} />
        <Text
          style={{
            fontFamily: fonts.bebas,
            fontSize: 24,
            color: 'white',
            marginLeft: 10,
          }}
        >
          {title}
        </Text>
      </View>
      <View style={styles.content}>{children}</View>
    </View>
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
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: theme.cardLine,
  },

  content: {
    marginVertical: 10,
    marginHorizontal: 15,
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

export default DetailCard;
