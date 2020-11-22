/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';

import { SafeAreaView, StyleSheet, View, StatusBar } from 'react-native';

import Footer from './components/Footer';

import Routes from './routes';
import { createRouter } from './router';

const App = () => {
  const [screen, setScreen] = React.useState(Object.keys(Routes)[0]);
  const Navigator = createRouter(Routes, setScreen);
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="black"
        animated={true}
      />
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.scrollView}>{Routes[screen]}</View>
        <Footer navigate={Navigator.navigate} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    alignContent: 'flex-end',
  },
  scrollView: {
    backgroundColor: 'black',
    flex: 1,
  },
});

export default App;
