import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import Header from '../components/Header';
import Feed from '../components/Feed';

const Home = () => {
  return (
    <View>
      <Header />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.feed}>
          <Feed author="shrestha_oshan" />
          <Feed author="shrestha_oshan" />
          <Feed author="shrestha_oshan" />
          <Feed author="shrestha_oshan" />
          <Feed author="shrestha_oshan" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  feed: {
    flex: 1,
    backgroundColor: 'lightblue',
    paddingBottom: 50,
  },
});

export default Home;
