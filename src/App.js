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

import { NavigationContainer } from '@react-navigation/native';

import TabNavigation from './components/TabNavigation';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="black"
        animated={true}
      />
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.scrollView}>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </View>
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
