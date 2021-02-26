import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import DetailCard from '../../components/DetailCard';
import Header from '../../components/Header';
import { fonts, theme } from '../../theme';

const Details: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header disableSearch />
      <ImageBackground
        source={require('../../../assets/images/charactersdetails.jpg')}
        style={styles.ImageBackground}
        imageStyle={{
          height:
            Dimensions.get('window').height / 2 +
            (StatusBar.currentHeight as number) +
            80,
        }}
      >
        <View style={styles.titleContainer}>
          <View style={styles.titleDecorators} />
          <View style={styles.titleContent}>
            <Text
              style={{
                fontFamily: fonts.aure,
                fontSize: 14,
                color: theme.primary,
              }}
            >
              Anakin
            </Text>
            <Text
              style={{ fontFamily: fonts.bebas, fontSize: 36, color: 'white' }}
            >
              Anakin
            </Text>
          </View>
          <View style={styles.titleDecorators} />
        </View>
      </ImageBackground>
      <View style={{ flex: 1 }}>
        <DetailCard title="Info" icon="analytics-outline">
          <Text>a</Text>
        </DetailCard>
      </View>
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
    height: '50%',
    width: '100%',
    paddingTop: (StatusBar.currentHeight as number) + 150,
    alignItems: 'center',
  },

  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleDecorators: {
    width: 10,
    height: 70,
    marginHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.decorators,
  },

  titleContent: {
    justifyContent: 'center',
  },
});

export default Details;
