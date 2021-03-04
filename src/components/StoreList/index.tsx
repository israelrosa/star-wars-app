import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import All from '../../interfaces/All';
import SquareCard from '../SquareCard';
import Sessions from '../Sessions';

interface Props {
  data: All[];
  type: string;
}

const StoreList: React.FC<Props> = ({ data, type }) => {
  const navigator = useNavigation();
  return (
    <View>
      <Sessions title="Recents" />
      <FlatList
        overScrollMode="always"
        horizontal
        data={data}
        renderItem={({ item }) => (
          <SquareCard
            data={item}
            onPress={() =>
              navigator.navigate('Details', {
                url: item.url,
                type,
              })
            }
          />
        )}
        keyExtractor={(item) => item.name || item.title}
      />
    </View>
  );
};

export default StoreList;
