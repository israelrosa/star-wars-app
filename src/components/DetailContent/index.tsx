import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import api from '../../services/api';
import { fonts, theme } from '../../theme';

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
  const navigator = useNavigation();

  useEffect(() => {
    (async () => {
      const result = await api.get(url);
      setData(result.data);
    })();
  }, [url]);

  return (
    <TouchableHighlight
      style={{
        alignItems: 'center',
        marginVertical: 5,
      }}
    >
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
            style={{ fontFamily: fonts.bebas, fontSize: 24, color: 'white' }}
          >
            {data?.name ?? data?.title}
          </Text>
        </View>
        {navigate && (
          <Ionicons
            name="chevron-forward-outline"
            size={25}
            color="white"
            onPress={() => navigator.navigate('Details', { url, type })}
          />
        )}
      </View>
    </TouchableHighlight>
  );
};

export default DetailContent;
