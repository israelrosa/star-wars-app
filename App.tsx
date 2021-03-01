import React from 'react';
import 'react-native-gesture-handler';
import { BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { Oswald_400Regular } from '@expo-google-fonts/oswald';
import { Poppins_700Bold } from '@expo-google-fonts/poppins';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './src/routes';
import { store, persistor } from './src/store';
import Load from './src/screens/Load';

const App: React.FC = () => {
  const [loaded] = useFonts({
    BebasNeue_400Regular,
    Oswald_400Regular,
    Poppins_700Bold,
    Aurebesh: require('./assets/fonts/Aurebesh.otf'),
    Starjedi: require('./assets/fonts/Starjedi.ttf'),
  });

  return (
    <Provider store={store}>
      <PersistGate loading={<Load />} persistor={persistor}>
        {loaded ? <Routes /> : <Load />}

        <StatusBar style="light" translucent />
      </PersistGate>
    </Provider>
  );
};

export default App;
