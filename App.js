import React from 'react';
import {StatusBar, StyleSheet, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';

import AppNavigation from './src/navigation';
import {store} from './src/redux/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppNavigation />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
