import React from 'react';

import { Image, View, Text, StyleSheet, Pressable } from 'react-native';

const Activity = ({ data }) => {
  return (
    <Pressable>
      <View style={styles.activityView}>
        <LikeActivity data={data} />
      </View>
    </Pressable>
  );
};

const LikeActivity = ({ data }) => {
  const getDimensions = (thumbnail) => {
    const width = 45;
    return {
      width,
      height: width * (thumbnail.height / thumbnail.width),
    };
  };
  return (
    <Pressable onPress={() => console.log(data.id)}>
      <View style={styles.likeActivity}>
        <View style={styles.thumbnail}>
          <Image
            style={styles.thumbnailImage}
            source={{ uri: data.content.thumbnail }}
          />
        </View>
        <View style={styles.activityInfo}>
          <Text style={styles.activityText}>
            <Text style={styles.bold}>@{data.content.originUser}</Text> liked
            your post.
          </Text>
        </View>
        <View style={styles.preview}>
          <Image
            style={getDimensions(data.content.post.thumbnail)}
            source={{ uri: data.content.post.thumbnail.link }}
          />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: '700',
  },
  activityView: {
    padding: 5,
    backgroundColor: 'black',
  },
  likeActivity: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  thumbnail: {
    paddingHorizontal: 10,
  },
  thumbnailImage: {
    width: 35,
    height: 35,
    borderRadius: 25,
  },
  activityInfo: {
    flex: 1,
    paddingHorizontal: 5,
  },
  activityText: {
    color: 'white',
  },
  preview: {
    paddingHorizontal: 5,
  },
});

export default Activity;
