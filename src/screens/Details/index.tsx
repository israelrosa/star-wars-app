import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { WindupChildren } from 'windups';
import {
  Dimensions,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { useDispatch } from 'react-redux';
import DetailCard from '../../components/DetailCard';
import DetailContent from '../../components/DetailContent';
import Header from '../../components/Header';
import api from '../../services/api';
import { AddCharacterHistoryAction } from '../../store/actions/characterHistoryActions';
import { AddPlanetHistoryAction } from '../../store/actions/planetHistoryActions';
import { fonts, theme } from '../../theme';

type RootParams = {
  Detail: { url: string; type: 'planet' | 'character' };
};

type RouterParams = RouteProp<RootParams, 'Detail'>;

interface Details {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  url: string;
  surface_water: string;
  population: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  residents: Array<string>;
  films: Array<string>;
  vehicles: Array<string>;
  species: Array<string>;
  starships: Array<string>;
}

const Details: React.FC = () => {
  const [detail, setDetail] = useState<Details>();
  const navigator = useNavigation();
  const router = useRoute<RouterParams>();
  const dispatch = useDispatch();

  useEffect(() => {
    let isUnmounted = false;
    router.params &&
      !isUnmounted &&
      (async () => {
        const result = await api.get<Details>(router.params.url);
        setDetail(result.data);

        dispatch(
          router.params.type === 'character'
            ? AddCharacterHistoryAction(result.data)
            : AddPlanetHistoryAction(result.data),
        );
      })();

    return () => {
      isUnmounted = true;
    };
  }, [router.params, router.params.url, dispatch]);

  return (
    <View style={styles.container}>
      <Header
        title={router.params.type}
        disableSearch
        goBack
        onPress={() => navigator.goBack()}
      />
      <ImageBackground
        source={
          router.params?.type === 'planet'
            ? require('../../../assets/images/details/planetsdetails.jpg')
            : require('../../../assets/images/details/charactersdetails.jpg')
        }
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
          <View style={[styles.titleContent]}>
            <Text
              style={{
                fontFamily: fonts.aure,
                fontSize: 14,
                color: theme.primary,
              }}
            >
              <WindupChildren>{detail?.name}</WindupChildren>
            </Text>
            <Text
              style={{ fontFamily: fonts.bebas, fontSize: 36, color: 'white' }}
            >
              <WindupChildren>{detail?.name}</WindupChildren>
            </Text>
          </View>
          <View style={styles.titleDecorators} />
        </View>
      </ImageBackground>
      <ScrollView style={{ flex: 1 }}>
        <DetailCard title="Info" icon="analytics-outline">
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <View>
              {detail?.height && (
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.textDetail}>Heigh:</Text>
                  <Text style={styles.textDetailContent}>{detail.height}</Text>
                </View>
              )}
              {detail?.hair_color && (
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.textDetail}>Hair Color:</Text>
                  <Text style={styles.textDetailContent}>
                    {detail.hair_color}
                  </Text>
                </View>
              )}
              {detail?.skin_color && (
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.textDetail}>Skin Color:</Text>
                  <Text style={styles.textDetailContent}>
                    {detail.skin_color}
                  </Text>
                </View>
              )}
              {detail?.rotation_period && (
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.textDetail}>Rotation Period:</Text>
                  <Text style={styles.textDetailContent}>
                    {detail.rotation_period}
                  </Text>
                </View>
              )}
              {detail?.climate && (
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.textDetail}>Climate:</Text>
                  <Text style={styles.textDetailContent}>{detail.climate}</Text>
                </View>
              )}
              {detail?.terrain && (
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.textDetail}>Terrain:</Text>
                  <Text style={styles.textDetailContent}>{detail.terrain}</Text>
                </View>
              )}
              {detail?.surface_water && (
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.textDetail}>Surface Water:</Text>
                  <Text style={styles.textDetailContent}>
                    {detail.surface_water}
                  </Text>
                </View>
              )}
            </View>
            <View>
              {detail?.mass && (
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.textDetail}>Mass:</Text>
                  <Text style={styles.textDetailContent}>{detail.mass}</Text>
                </View>
              )}
              {detail?.gender && (
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.textDetail}>Gender:</Text>
                  <Text style={styles.textDetailContent}>{detail.gender}</Text>
                </View>
              )}
              {detail?.orbital_period && (
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.textDetail}>Orbital Period:</Text>
                  <Text style={styles.textDetailContent}>
                    {detail.orbital_period}
                  </Text>
                </View>
              )}
              {detail?.gravity && (
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.textDetail}>Gravity:</Text>
                  <Text style={styles.textDetailContent}>{detail.gravity}</Text>
                </View>
              )}
              {detail?.diameter && (
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.textDetail}>Diameter:</Text>
                  <Text style={styles.textDetailContent}>
                    {detail.diameter}
                  </Text>
                </View>
              )}
              {detail?.population && (
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.textDetail}>Population:</Text>
                  <Text style={styles.textDetailContent}>
                    {detail.population}
                  </Text>
                </View>
              )}
            </View>
            <View>
              {detail?.birth_year && (
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.textDetail}>birth Year:</Text>
                  <Text style={styles.textDetailContent}>
                    {detail.birth_year}
                  </Text>
                </View>
              )}
              {detail?.eye_color && (
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.textDetail}>Eye Color:</Text>
                  <Text style={styles.textDetailContent}>
                    {detail.eye_color}
                  </Text>
                </View>
              )}
            </View>
          </View>
        </DetailCard>

        {detail && detail.homeworld?.length > 0 && (
          <DetailCard title="Homeworld" icon="planet-outline">
            <DetailContent url={detail.homeworld} navigate type="planet" />
          </DetailCard>
        )}
        {detail && detail.species?.length > 0 && (
          <DetailCard title="Species" icon="body-outline">
            {detail.species.map((sp) => (
              <DetailContent url={sp} key={sp} />
            ))}
          </DetailCard>
        )}
        {detail && detail.vehicles?.length > 0 && (
          <DetailCard title="Vehicles" icon="car-outline">
            {detail.vehicles.map((v) => (
              <DetailContent url={v} key={v} />
            ))}
          </DetailCard>
        )}
        {detail && detail.starships?.length > 0 && (
          <DetailCard title="Starships" icon="rocket-outline">
            {detail.starships.map((st) => (
              <DetailContent url={st} key={st} />
            ))}
          </DetailCard>
        )}
        {detail && detail.residents?.length > 0 && (
          <DetailCard title="Residents" icon="man-outline">
            {detail.residents.map((rs) => (
              <DetailContent url={rs} key={rs} navigate type="character" />
            ))}
          </DetailCard>
        )}
        {detail && detail.films?.length > 0 && (
          <DetailCard title="Films" icon="film-outline">
            {detail.films.map((flm) => (
              <DetailContent url={flm} key={flm} />
            ))}
          </DetailCard>
        )}
      </ScrollView>
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

  textDetail: {
    color: theme.primary,
    fontFamily: fonts.osw,
  },

  textDetailContent: {
    color: 'white',
    fontFamily: fonts.osw,
    marginLeft: 5,
  },
});

export default Details;
