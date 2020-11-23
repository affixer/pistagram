import React from 'react';
import { View, RefreshControl, FlatList, StyleSheet } from 'react-native';

import Activity from '../components/Activity';
import Header from '../components/Header';

const data = [
  {
    id: 123123,
    type: 'like',
    content: {
      thumbnail:
        'https://i0.wp.com/www.engage-innovate.com/wp-content/uploads/2019/01/Jolene-Foo-Profile-Square.jpg',
      originUser: 'manandhar.dia',
      post: {
        id: 78634,
        thumbnail: {
          link:
            'https://images.unsplash.com/photo-1601758175576-648226072e90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=100',
          width: 100,
          height: 65,
        },
      },
    },
    _t: new Date(Date.now()).toTimeString(),
  },
  {
    id: 23123,
    type: 'like',
    content: {
      thumbnail:
        'https://i.pinimg.com/236x/2f/20/ca/2f20cae36c488c55fd6db6729b45b9fe.jpg',
      originUser: 'jenny_tmg',
      post: {
        id: 78634,
        thumbnail: {
          link:
            'https://images.unsplash.com/photo-1601758175576-648226072e90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=100',
          width: 100,
          height: 65,
        },
      },
    },
    _t: new Date(Date.now()).toTimeString(),
  },
  {
    id: 3123,
    type: 'like',
    content: {
      thumbnail:
        'https://pbs.twimg.com/profile_images/1236735749967372288/h2_MoJNK_400x400.jpg',
      originUser: 'bhumiicha_',
      post: {
        id: 78634,
        thumbnail: {
          link:
            'https://images.unsplash.com/photo-1601758003453-6c950f17727d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=100',
          width: 100,
          height: 67,
        },
      },
    },
    _t: new Date(Date.now()).toTimeString(),
  },
  {
    id: 2378123,
    type: 'like',
    content: {
      thumbnail:
        'https://i1.rgstatic.net/ii/profile.image/525776623595522-1502366323662_Q512/Nilesh_Mate3.jpg',
      originUser: 'niles_shrestha',
      post: {
        id: 78634,
        thumbnail: {
          link:
            'https://images.unsplash.com/photo-1601758175576-648226072e90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=100',
          width: 100,
          height: 65,
        },
      },
    },
    _t: new Date(Date.now()).toTimeString(),
  },
  {
    id: 23154823,
    type: 'like',
    content: {
      thumbnail:
        'https://www.marryadevotee.com/krishnaa/wp-content/uploads/avatars/8057/574eee7a43797-bpfull.jpg',
      originUser: 'tyrafero',
      post: {
        id: 78634,
        thumbnail: {
          link:
            'https://images.unsplash.com/photo-1601758175576-648226072e90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=100',
          width: 100,
          height: 65,
        },
      },
    },
    _t: new Date(Date.now()).toTimeString(),
  },
  {
    id: 23,
    type: 'like',
    content: {
      thumbnail:
        'https://i0.wp.com/www.engage-innovate.com/wp-content/uploads/2019/01/Jolene-Foo-Profile-Square.jpg',
      originUser: 'manandhar.dia',
      post: {
        id: 78634,
        thumbnail: {
          link:
            'https://images.unsplash.com/photo-1605885898627-1121a2a1ff25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=100',
          width: 100,
          height: 125,
        },
      },
    },
    _t: new Date(Date.now()).toTimeString(),
  },
];

const Activities = () => {
  const [refreshing, setRefreshingState] = React.useState(false);
  const refresh = React.useCallback(() => {
    setRefreshingState(true);
    setTimeout(() => {
      setRefreshingState(false);
    }, 1500);
  }, []);
  return (
    <View style={styles.container}>
      <Header title="Activity" />
      <View style={styles.activityView}>
        <FlatList
          data={data}
          renderItem={({ item }) => <Activity data={item} />}
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
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  activityView: {
    flex: 1,
  },
});

export default Activities;
