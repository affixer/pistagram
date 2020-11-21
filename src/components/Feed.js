import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';

import BookmarkIcon from './Icons/BookmarkIcon';
import CommentIcon from './Icons/CommentIcon';
import HeartIcon from './Icons/HeartIcon';
import MoreVerticalIcon from './Icons/MoreVerticalIcon';
import ShareIcon from './Icons/ShareIcon';

const Feed = ({ data }) => {
  const devWidth = useWindowDimensions().width;
  const getDynamicStyle = ({ height, width }) => {
    return {
      ...styles.contentImage,
      width: devWidth,
      height: (height / width) * devWidth,
    };
  };
  return (
    <View style={styles.feedView}>
      <View style={styles.feedHeader}>
        <View style={styles.feedAvatarView}>
          <Image
            style={styles.avatar}
            source={{
              uri: data.thumbnail,
            }}
          />
        </View>
        <View style={styles.meta}>
          <Pressable onPress={() => console.log('Pressed: ', data.author)}>
            <Text style={styles.author}>{data.author}</Text>
          </Pressable>
          <Text style={styles.location}>{data.location}</Text>
        </View>
        <TouchableOpacity>
          <Pressable>
            <MoreVerticalIcon size={22} style={styles.headerOption} />
          </Pressable>
        </TouchableOpacity>
      </View>
      <View style={styles.feedContent}>
        <Image
          style={getDynamicStyle(data.content.dimensions)}
          source={{
            uri: data.content.link,
          }}
        />
        <View style={styles.controls}>
          <View style={styles.likeComments}>
            <HeartIcon size={34} style={styles.controlIcon} />
            <CommentIcon size={26} style={styles.controlIcon} />
            <ShareIcon size={26} style={styles.controlIconNoTransform} />
          </View>
          <BookmarkIcon size={26} style={styles.controlIcon} />
        </View>
        <View style={styles.details}>
          <Text style={styles.likes}>{`${data.likes} like${
            data.likes !== 1 ? 's' : ''
          }`}</Text>
          {data.peers ? (
            /* eslint-disable-next-line react-native/no-inline-styles */
            <Text style={[styles.likes, { fontSize: 14 }]}> - Liked by</Text>
          ) : null}
        </View>
        <View style={styles.captions}>
          <Text style={styles.caption}>
            <Text style={[styles.author, styles.bold]}>{data.author} </Text>
            {data.caption ?? 'Would you take my hand and run away?'}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: '700',
  },
  feedView: {
    paddingVertical: 5,
    backgroundColor: 'black',
  },
  feedHeader: {
    padding: 10,
    flexDirection: 'row',
  },
  feedAvatarView: {
    width: 32.5,
    height: 32.5,
    borderRadius: 15,
    overflow: 'hidden',
  },
  avatar: {
    width: 32.5,
    height: 32.5,
  },
  meta: {
    height: 32.5,
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  headerOption: {
    color: 'white',
  },
  author: {
    color: 'white',
    fontSize: 15,
  },
  location: {
    color: '#e3e3e3',
    fontSize: 11,
  },
  feedContent: {
    flex: 1,
  },
  contentImage: {
    resizeMode: 'cover',
  },
  controls: {
    paddingVertical: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  likeComments: {
    flexDirection: 'row',
  },
  controlIcon: {
    color: 'white',
    marginHorizontal: 5,
    transform: [
      {
        rotateY: '180deg',
      },
    ],
  },
  controlIconNoTransform: {
    color: 'white',
    marginHorizontal: 7,
  },
  details: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  likes: {
    color: 'white',
    fontSize: 13,
    fontWeight: '700',
  },
  captions: {
    paddingHorizontal: 10,
  },
  caption: {
    color: 'white',
    fontSize: 13,
  },
});

export default Feed;
