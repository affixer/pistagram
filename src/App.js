/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native';

import Footer from './components/Footer';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="black"
        animated={true}
      />
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Home />
        </ScrollView>
        <Footer />
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
    backgroundColor: Colors.lighter,
  },
});

export default App;
