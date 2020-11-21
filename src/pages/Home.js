import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import Header from '../components/Header';
import Feed from '../components/Feed';

const Home = () => {
  const data = [
    {
      author: 'shrestha_oshan',
      location: 'Somewhere only we know',
      likes: 12,
      caption: '',
      thumbnail:
        'http://1.gravatar.com/avatar/11ae31d09f61467dc7474e9e66208c96',
      content: {
        type: 'image',
        link:
          'https://images.unsplash.com/photo-1601758003453-6c950f17727d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=',
        dimensions: {
          width: 750,
          height: 500,
        },
      },
    },
    {
      author: 'shrestha_oshan',
      location: 'The Good Place',
      likes: 12,
      caption: 'Chewy and his catto friend.',
      thumbnail:
        'http://1.gravatar.com/avatar/11ae31d09f61467dc7474e9e66208c96',
      content: {
        type: 'image',
        link:
          'https://images.unsplash.com/photo-1601758175576-648226072e90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=770',
        dimensions: {
          width: 750,
          height: 500,
        },
      },
    },
    {
      author: 'shrestha_oshan',
      location: 'Somewhere only we know',
      likes: '117k',
      caption: 'The blue, the calm, and you',
      thumbnail:
        'http://1.gravatar.com/avatar/11ae31d09f61467dc7474e9e66208c96',
      content: {
        type: 'image',
        link:
          'https://images.unsplash.com/photo-1605885898627-1121a2a1ff25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=401',
        dimensions: {
          width: 401,
          height: 501,
        },
      },
    },
  ];
  return (
    <View>
      <Header />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.feed}>
          {data.reverse().map((item, i) => (
            <Feed data={item} key={i} />
          ))}
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
