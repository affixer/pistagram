import React from 'react';
import { View, RefreshControl, FlatList, StyleSheet } from 'react-native';

import Activity from '../components/Activity';

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
    <View>
      <View style={styles.feedView}>
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
  feedView: { marginBottom: 100 },
});

export default Activities;
