import React from 'react';

import { View, Text, StyleSheet, Pressable } from 'react-native';

const Activity = ({ data }) => {
  return (
    <Pressable>
      <View style={styles.activityView}>
        <Text style={styles.activity}>
          <Text style={styles.bold}>@{data.content.originUser}</Text> liked your
          post.
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: '700',
  },
  activityView: {
    padding: 10,
    backgroundColor: 'black',
  },
  activity: {
    color: 'white',
  },
});

export default Activity;
