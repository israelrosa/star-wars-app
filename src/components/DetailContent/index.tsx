import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import api from '../../services/api';
import { fonts, theme } from '../../theme';
import Loading from '../Loading';

interface Props {
  url: string;
  navigate?: boolean;
  type?: string;
}

interface Data {
  name: string;
  title: string;
  url: string;
}

const DetailContent: React.FC<Props> = ({ url, navigate, type }) => {
  const [data, setData] = useState<Data>();
  const [notFound, setNotFound] = useState(false);
  const navigator = useNavigation();

  useEffect(() => {
    let isUnmounted = false;
    !isUnmounted &&
      (async () => {
        const result = await api.get(url);
        if (result.data) {
          setData(result.data);
        } else {
          setNotFound(true);
        }
      })();

    return () => {
      isUnmounted = true;
    };
  }, [url]);

  return (
    <>
      {!notFound ? (
        <TouchableHighlight
          style={{
            alignItems: 'center',
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderRadius: 10,
          }}
          onPress={() =>
            navigate && navigator.navigate('Details', { url, type })
          }
        >
          {data ? (
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <View>
                <Text
                  style={{
                    fontFamily: fonts.aure,
                    fontSize: 10,
                    color: theme.primary,
                  }}
                >
                  {data?.name ?? data?.title}
                </Text>
                <Text
                  style={{
                    fontFamily: fonts.bebas,
                    fontSize: 24,
                    color: 'white',
                  }}
                >
                  {data?.name ?? data?.title}
                </Text>
              </View>
              {navigate && (
                <Ionicons
                  name="chevron-forward-outline"
                  size={25}
                  color="white"
                />
              )}
            </View>
          ) : (
            <Loading style={{ transform: [{ scale: 0.6 }] }} />
          )}
        </TouchableHighlight>
      ) : (
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontFamily: fonts.bebas,
              fontSize: 24,
              color: 'white',
            }}
          >
            No results
          </Text>
        </View>
      )}
    </>
  );
};

export default DetailContent;
