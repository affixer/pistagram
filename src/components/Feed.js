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

import MoreVerticalIcon from '../components/Icons/MoreVerticalIcon';

const Feed = () => {
  const devWidth = useWindowDimensions().width;
  const data = {
    author: 'shrestha_oshan',
    location: 'Somewhere only we know',
    thumbnail: 'http://1.gravatar.com/avatar/11ae31d09f61467dc7474e9e66208c96',
    content: {
      type: 'image',
      link:
        'https://images.unsplash.com/photo-1601758003453-6c950f17727d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=750',
      dimensions: {
        width: 750,
        height: 500,
      },
    },
  };
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    flexDirection: 'row',
  },
  contentImage: {
    resizeMode: 'cover',
  },
});

export default Feed;
