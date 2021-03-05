import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import List from '../screens/List';
import Details from '../screens/Details';

type RootStackParamList = {
  Home: undefined;
  List: { userId: string };
  Details: { url: string; type: string };
};

const Stack = createStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen
          name="Details"
          component={Details}
          getId={({ params }) => params.url}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
