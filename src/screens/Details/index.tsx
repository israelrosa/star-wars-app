import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import DetailCard from '../../components/DetailCard';
import DetailContent from '../../components/DetailContent';
import Header from '../../components/Header';
import api from '../../services/api';
import { AddCharacterHistoryAction } from '../../store/actions/characterHistoryActions';
import { AddPlanetHistoryAction } from '../../store/actions/planetHistoryActions';
import { fonts, theme } from '../../theme';
import All from '../../interfaces/All';
import { AddFilmHistoryAction } from '../../store/actions/filmHistoryActions';
import { AddSpecieHistoryAction } from '../../store/actions/specieHistoryActions';
import { AddStarshipHistoryAction } from '../../store/actions/starshipsHistoryActions';
import { AddVehicleHistoryAction } from '../../store/actions/vehicleHistoryActions';
import { CharacterHistoryState } from '../../store/types/characterTypes';
import { PlanetHistoryState } from '../../store/types/planetTypes';
import { SpecieHistoryState } from '../../store/types/specieTypes';
import { FilmHistoryState } from '../../store/types/filmTypes';
import { VehicleHistoryState } from '../../store/types/vehicleTypes';
import { StarshipHistoryState } from '../../store/types/starshipTypes';
import Planets from '../../interfaces/Planets';
import Characters from '../../interfaces/Characters';
import Species from '../../interfaces/Species';
import Films from '../../interfaces/Films';
import Vehicles from '../../interfaces/Vehicles';
import Starships from '../../interfaces/Starships';

type RootParams = {
  Detail: {
    url: string;
    type: 'character' | 'planet' | 'specie' | 'film' | 'vehicle' | 'starship';
  };
};

type CharacterSelector = { characters: CharacterHistoryState };
type PlanetsSelector = { planets: PlanetHistoryState };
type SpeciesSelector = { species: SpecieHistoryState };
type FilmsSelector = { films: FilmHistoryState };
type VehiclesSelector = { vehicles: VehicleHistoryState };
type StarshipsSelector = { starships: StarshipHistoryState };

type RouterParams = RouteProp<RootParams, 'Detail'>;

const Details: React.FC = () => {
  const [detail, setDetail] = useState<All>();
  const navigator = useNavigation();
  const router = useRoute<RouterParams>();
  const dispatch = useDispatch();
  const planetSelector = useSelector<PlanetsSelector, Planets[]>(
    ({ planets }) => planets.planets,
  );
  const characterSelector = useSelector<CharacterSelector, Characters[]>(
    ({ characters }) => characters.characters,
  );
  const specieSelector = useSelector<SpeciesSelector, Species[]>(
    ({ species }) => species.species,
  );
  const filmSelector = useSelector<FilmsSelector, Films[]>(
    ({ films }) => films.films,
  );
  const vehicleSelector = useSelector<VehiclesSelector, Vehicles[]>(
    ({ vehicles }) => vehicles.vehicles,
  );
  const starshipSelector = useSelector<StarshipsSelector, Starships[]>(
    ({ starships }) => starships.starships,
  );

  const ApiLoad = useCallback(async () => {
    const result = await api.get<All>(router.params.url);
    setDetail(result.data);
    switch (router.params.type) {
      case 'character':
        dispatch(AddCharacterHistoryAction(result.data));
        break;
      case 'film':
        dispatch(AddFilmHistoryAction(result.data));
        break;
      case 'planet':
        dispatch(AddPlanetHistoryAction(result.data));
        break;
      case 'specie':
        dispatch(AddSpecieHistoryAction(result.data));
        break;
      case 'starship':
        dispatch(AddStarshipHistoryAction(result.data));
        break;
      case 'vehicle':
        dispatch(AddVehicleHistoryAction(result.data));
        break;
      default:
        break;
    }
  }, [router.params.url, router.params.type, dispatch]);

  const StorageLoad = useCallback((): boolean => {
    if (router.params) {
      if (router.params.type === 'character') {
        const character = characterSelector.find(
          (ch) => ch.url === router.params.url,
        );

        if (character) {
          setDetail(character as All);
          return true;
        }
        return false;
      }
      if (router.params.type === 'planet') {
        const planet = planetSelector.find(
          (pl) => pl.url === router.params.url,
        );

        if (planet) {
          setDetail(planet as All);
          return true;
        }
        return false;
      }
      if (router.params.type === 'specie') {
        const specie = specieSelector.find(
          (sp) => sp.url === router.params.url,
        );

        if (specie) {
          setDetail(specie as All);
          return true;
        }
        return false;
      }
      if (router.params.type === 'film') {
        const film = filmSelector.find((flm) => flm.url === router.params.url);

        if (film) {
          setDetail(film as All);
          return true;
        }
        return false;
      }
      if (router.params.type === 'starship') {
        const starship = starshipSelector.find(
          (ssp) => ssp.url === router.params.url,
        );

        if (starship) {
          setDetail(starship as All);
          return true;
        }
        return false;
      }
      if (router.params.type === 'vehicle') {
        const vehicle = vehicleSelector.find(
          (vh) => vh.url === router.params.url,
        );

        if (vehicle) {
          setDetail(vehicle as All);
          return true;
        }
        return false;
      }
      if (router.params.type === 'character') {
        const character = characterSelector.find(
          (ch) => ch.url === router.params.url,
        );

        if (character) {
          setDetail(character as All);
          return true;
        }
        return false;
      }
    }
    return false;
  }, [
    characterSelector,
    vehicleSelector,
    specieSelector,
    starshipSelector,
    planetSelector,
    filmSelector,
    router.params,
  ]);

  useEffect(() => {
    let isUnmounted = false;
    router.params && !isUnmounted && !StorageLoad() && ApiLoad();

    return () => {
      isUnmounted = true;
    };
  }, [ApiLoad, StorageLoad, router.params]);

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
              <WindupChildren>{detail?.name ?? detail?.title}</WindupChildren>
            </Text>
            <Text
              style={{ fontFamily: fonts.bebas, fontSize: 36, color: 'white' }}
            >
              <WindupChildren>{detail?.name ?? detail?.title}</WindupChildren>
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
              paddingVertical: 10,
              paddingHorizontal: 15,
            }}
          >
            <View style={styles.sessions}>
              {detail?.height && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Heigh:
                    <Text style={styles.textDetailContent}>
                      {detail.height}
                    </Text>
                  </Text>
                </View>
              )}
              {detail?.hair_color && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Hair Color:
                    <Text style={styles.textDetailContent}>
                      {detail.hair_color}
                    </Text>
                  </Text>
                </View>
              )}
              {detail?.skin_color && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Skin Color:
                    <Text style={styles.textDetailContent}>
                      {detail.skin_color}
                    </Text>
                  </Text>
                </View>
              )}
              {detail?.rotation_period && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Rotation Period:
                    <Text style={styles.textDetailContent}>
                      {detail.rotation_period}
                    </Text>
                  </Text>
                </View>
              )}
              {detail?.climate && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Climate:
                    <Text style={styles.textDetailContent}>
                      {detail.climate}
                    </Text>
                  </Text>
                </View>
              )}
              {detail?.terrain && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Terrain:
                    <Text style={styles.textDetailContent}>
                      {detail.terrain}
                    </Text>
                  </Text>
                </View>
              )}
              {detail?.surface_water && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Surface Water:
                    <Text style={styles.textDetailContent}>
                      {detail.surface_water}
                    </Text>
                  </Text>
                </View>
              )}
              {detail?.classification && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Classification:
                    <Text style={styles.textDetailContent}>
                      {detail.classification}
                    </Text>
                  </Text>
                </View>
              )}
              {detail?.designation && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Designation:
                    <Text style={styles.textDetailContent}>
                      {detail.designation}
                    </Text>
                  </Text>
                </View>
              )}
              {detail?.average_height && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Average Height:
                    <Text style={styles.textDetailContent}>
                      {detail.average_height}
                    </Text>
                  </Text>
                </View>
              )}
              {detail?.average_lifespan && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Average Lifespan:
                    <Text style={styles.textDetailContent}>
                      {detail.average_lifespan}
                    </Text>
                  </Text>
                </View>
              )}
              {detail?.language && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Language:
                    <Text style={styles.textDetailContent}>
                      {detail.language}
                    </Text>
                  </Text>
                </View>
              )}
              {detail?.opening_crawl && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Abstract:
                    <Text style={styles.textDetailContent}>
                      {detail.opening_crawl}
                    </Text>
                  </Text>
                </View>
              )}
              {detail?.director && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Director:
                    <Text style={styles.textDetailContent}>
                      {detail.director}
                    </Text>
                  </Text>
                </View>
              )}
              {detail?.producer && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Producer:
                    <Text style={styles.textDetailContent}>
                      {detail.producer}
                    </Text>
                  </Text>
                </View>
              )}
              {detail?.episode_id && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Episode Id:
                    <Text style={styles.textDetailContent}>
                      {detail.episode_id}
                    </Text>
                  </Text>
                </View>
              )}
              {detail?.release_date && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Release Date:
                    <Text style={styles.textDetailContent}>
                      {detail.release_date}
                    </Text>
                  </Text>
                </View>
              )}
              {detail?.model && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Model:
                    <Text style={styles.textDetailContent}>{detail.model}</Text>
                  </Text>
                </View>
              )}
              {detail?.manufacturer && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Manufacturer:
                    <Text style={styles.textDetailContent}>
                      {detail.manufacturer}
                    </Text>
                  </Text>
                </View>
              )}
              {detail?.cost_in_credits && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Cost:
                    <Text style={styles.textDetailContent}>
                      {detail.cost_in_credits}
                    </Text>
                  </Text>
                </View>
              )}
              {detail?.length && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Lenght:
                    <Text style={styles.textDetailContent}>
                      {detail.length}
                    </Text>
                  </Text>
                </View>
              )}
              {detail?.cargo_capacity && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Cargo Capacity:
                    <Text style={styles.textDetailContent}>
                      {detail.cargo_capacity}
                    </Text>
                  </Text>
                </View>
              )}
              {detail?.consumables && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Consumables:
                    <Text style={styles.textDetailContent}>
                      {detail.consumables}
                    </Text>
                  </Text>
                </View>
              )}
              {detail?.vehicle_class && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Vehicles Class:
                    <Text style={styles.textDetailContent}>
                      {detail.vehicle_class}
                    </Text>
                  </Text>
                </View>
              )}
            </View>
            <View style={styles.sessions}>
              {detail?.mass && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Mass:
                    <Text style={styles.textDetailContent}>{detail.mass}</Text>
                  </Text>
                </View>
              )}
              {detail?.gender && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Gender:
                    <Text style={styles.textDetailContent}>
                      {detail.gender}
                    </Text>
                  </Text>
                </View>
              )}
              {detail?.orbital_period && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Orbital Period:
                    <Text style={styles.textDetailContent}>
                      {detail.orbital_period}
                    </Text>
                  </Text>
                </View>
              )}
              {detail?.gravity && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Gravity:
                    <Text style={styles.textDetailContent}>
                      {detail.gravity}
                    </Text>
                  </Text>
                </View>
              )}
              {detail?.diameter && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Diameter:
                    <Text style={styles.textDetailContent}>
                      {detail.diameter}
                    </Text>
                  </Text>
                </View>
              )}
              {detail?.population && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Population:
                    <Text style={styles.textDetailContent}>
                      {detail.population}
                    </Text>
                  </Text>
                </View>
              )}

              {detail?.skin_colors && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Skin Colors:
                    <Text style={styles.textDetailContent}>
                      {detail.skin_colors}
                    </Text>
                  </Text>
                </View>
              )}
              {detail?.hair_colors && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Hair Colors:
                    <Text style={styles.textDetailContent}>
                      {detail.hair_colors}
                    </Text>
                  </Text>
                </View>
              )}
              {detail?.eye_colors && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Eye Colors:
                    <Text style={styles.textDetailContent}>
                      {detail.eye_colors}
                    </Text>
                  </Text>
                </View>
              )}
              {detail?.max_atmosphering_speed && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Max Speed:
                    <Text style={styles.textDetailContent}>
                      {detail.max_atmosphering_speed}
                    </Text>
                  </Text>
                </View>
              )}
              {detail?.crew && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Crew:
                    <Text style={styles.textDetailContent}>{detail.crew}</Text>
                  </Text>
                </View>
              )}
              {detail?.passengers && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Passengers:
                    <Text style={styles.textDetailContent}>
                      {detail.passengers}
                    </Text>
                  </Text>
                </View>
              )}
              {detail?.hyperdrive_rating && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Hyperdrive Rating:
                    <Text style={styles.textDetailContent}>
                      {detail.hyperdrive_rating}
                    </Text>
                  </Text>
                </View>
              )}
              {detail?.MGLT && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    MGLT:
                    <Text style={styles.textDetailContent}>{detail.MGLT}</Text>
                  </Text>
                </View>
              )}
              {detail?.starship_class && (
                <View style={styles.detailContainer}>
                  <Text style={styles.textDetail}>
                    Starships Class:
                    <Text style={styles.textDetailContent}>
                      {detail.starship_class}
                    </Text>
                  </Text>
                </View>
              )}
            </View>

            {(detail?.birth_year || detail?.eye_color) && (
              <View style={styles.sessions}>
                {detail?.birth_year && (
                  <View style={styles.detailContainer}>
                    <Text style={styles.textDetail}>
                      birth Year:
                      <Text style={styles.textDetailContent}>
                        {detail.birth_year}
                      </Text>
                    </Text>
                  </View>
                )}
                {detail?.eye_color && (
                  <View style={styles.detailContainer}>
                    <Text style={styles.textDetail}>
                      Eye Color:
                      <Text style={styles.textDetailContent}>
                        {detail.eye_color}
                      </Text>
                    </Text>
                  </View>
                )}
              </View>
            )}
          </View>
        </DetailCard>

        {detail && detail.homeworld?.length > 0 && (
          <DetailCard title="Homeworld" icon="planet-outline">
            <DetailContent url={detail.homeworld} navigate type="planet" />
          </DetailCard>
        )}

        {detail && detail.characters?.length > 0 && (
          <DetailCard title="Characters" icon="people-outline">
            {detail.characters.map((ch) => (
              <DetailContent url={ch} key={ch} navigate type="character" />
            ))}
          </DetailCard>
        )}

        {detail && detail.people?.length > 0 && (
          <DetailCard title="People" icon="people-outline">
            {detail.people.map((people) => (
              <DetailContent
                url={people}
                key={people}
                navigate
                type="character"
              />
            ))}
          </DetailCard>
        )}

        {detail && detail.pilots?.length > 0 && (
          <DetailCard title="Pilots" icon="people-outline">
            {detail.pilots.map((pl) => (
              <DetailContent url={pl} key={pl} navigate type="character" />
            ))}
          </DetailCard>
        )}

        {detail && detail.species?.length > 0 && (
          <DetailCard title="Species" icon="body-outline">
            {detail.species.map((sp) => (
              <DetailContent url={sp} key={sp} navigate type="specie" />
            ))}
          </DetailCard>
        )}

        {detail && detail.vehicles?.length > 0 && (
          <DetailCard title="Vehicles" icon="car-outline">
            {detail.vehicles.map((v) => (
              <DetailContent url={v} key={v} navigate type="vehicle" />
            ))}
          </DetailCard>
        )}

        {detail && detail.starships?.length > 0 && (
          <DetailCard title="Starships" icon="rocket-outline">
            {detail.starships.map((st) => (
              <DetailContent url={st} key={st} navigate type="starship" />
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
              <DetailContent url={flm} key={flm} navigate type="film" />
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

  sessions: {},

  detailContainer: {},

  textDetail: {
    color: theme.primary,
    fontFamily: fonts.osw,
    maxWidth: 200,
    flexWrap: 'wrap',
  },

  textDetailContent: {
    color: 'white',
  },
});

export default Details;
