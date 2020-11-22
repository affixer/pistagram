import React from 'react';

import { View, Text, StyleSheet, Pressable } from 'react-native';

const Activity = ({ data }) => {
  return (
    <Pressable>
      <View style={styles.activityView}>
        <Text style={{ color: 'white' }}>{data.id}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: '700',
  },
  activityView: {
    paddingVertical: 5,
    backgroundColor: 'black',
  },
});

export default Activity;
