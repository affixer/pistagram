import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from '../components/Header';
import Feed from '../components/Feed';

const Home = () => {
  return (
    <View>
      <Header />
      <View style={styles.feed}>
        <Feed author="shrestha_oshan" />
        <Feed author="shrestha_oshan" />
        <Feed author="shrestha_oshan" />
        <Feed author="shrestha_oshan" />
        <Feed author="shrestha_oshan" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  feed: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
});

export default Home;
