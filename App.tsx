import React from 'react';
import { BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { Oswald_400Regular } from '@expo-google-fonts/oswald';
import { Poppins_700Bold } from '@expo-google-fonts/poppins';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import List from './src/screens/List';
import Details from './src/screens/Details';
// import Home from './src/screens/Home';

const App: React.FC = () => {
  const [loaded] = useFonts({
    BebasNeue_400Regular,
    Oswald_400Regular,
    Poppins_700Bold,
    Aurebesh: require('./assets/fonts/Aurebesh.otf'),
    Starjedi: require('./assets/fonts/Starjedi.ttf'),
  });

  return (
    <>
      {loaded && (
        <>
          <Details />
          <StatusBar style="light" translucent />
        </>
      )}
    </>
  );
};

export default App;
