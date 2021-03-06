import React from 'react';
import { View, RefreshControl, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from '../components/Header';
import Feed from '../components/Feed';

const data = [
  {
    id: 176523,
    author: 'shrestha_oshan',
    location: 'The Good Place',
    likes: 12,
    caption: 'Chewy and his catto friend.',
    thumbnail: 'http://1.gravatar.com/avatar/11ae31d09f61467dc7474e9e66208c96',
    content: {
      type: 'image',
      link:
        'https://images.unsplash.com/photo-1601758175576-648226072e90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1400',
      dimensions: {
        width: 750,
        height: 500,
      },
    },
  },
  {
    id: 1872613,
    author: 'shrestha_oshan',
    location: 'Somewhere only we know',
    likes: '117k',
    caption: 'The blue, the calm, and you',
    thumbnail: 'http://1.gravatar.com/avatar/11ae31d09f61467dc7474e9e66208c96',
    content: {
      type: 'image',
      link:
        'https://images.unsplash.com/photo-1605885898627-1121a2a1ff25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1400',
      dimensions: {
        width: 400,
        height: 500,
      },
    },
  },
  {
    id: 232324,
    author: 'shrestha_oshan',
    location: 'Somewhere only we know',
    likes: 12,
    caption: '',
    thumbnail: 'http://1.gravatar.com/avatar/11ae31d09f61467dc7474e9e66208c96',
    content: {
      type: 'image',
      link:
        'https://images.unsplash.com/photo-1601758003453-6c950f17727d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1250',
      dimensions: {
        width: 750,
        height: 500,
      },
    },
  },
];

const Home = ({ navigation }) => {
  const [refreshing, setRefreshingState] = React.useState(false);
  const refresh = React.useCallback(() => {
    setRefreshingState(true);
    setTimeout(() => {
      setRefreshingState(false);
    }, 1500);
  }, []);
  return (
    <View>
      <Header
        icon={<Icon name="chatbubble-outline" size={28} style={styles.icon} />}
      />
      <View style={styles.feedView}>
        <FlatList
          data={data}
          renderItem={({ item }) => <Feed data={item} />}
          keyExtractor={(item) => item.id.toString()}
          removeClippedSubviews={true}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={refresh}
              progressViewOffset={45}
              progressBackgroundColor="#111"
              colors={['#939393']}
            />
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  feedView: { marginBottom: 100 },
  icon: {
    color: 'white',
  },
});

export default Home;
