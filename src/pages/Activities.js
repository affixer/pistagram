import React from 'react';
import { View, RefreshControl, FlatList, StyleSheet } from 'react-native';

import Activity from '../components/Activity';
import Header from '../components/Header';

const data = [
  {
    id: 123123,
    type: 'like',
    content: {
      originUser: 'dia_manandhar',
      post: '232411773',
    },
    _t: new Date(Date.now()).toTimeString(),
  },
  {
    id: 23,
    type: 'like',
    content: {
      originUser: 'dia_manandhar',
      post: '232411773',
    },
    _t: new Date(Date.now()).toTimeString(),
  },
  {
    id: 3123,
    type: 'like',
    content: {
      originUser: 'dia_manandhar',
      post: '232411773',
    },
    _t: new Date(Date.now()).toTimeString(),
  },
  {
    id: 23123,
    type: 'like',
    content: {
      originUser: 'dia_manandhar',
      post: '232411773',
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
    flexDirection: 'column',
  },
  activityView: {
    marginBottom: 100,
    backgroundColor: 'blue',
  },
});

export default Activities;
