import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import HeartIcon from './Icons/HeartIcon';
import HomeIcon from './Icons/HomeIcon';

const Footer = () => {
  return (
    <View style={styles.footerView}>
      <TouchableOpacity>
        <HomeIcon size={25} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="search-outline" size={28} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="add" size={32} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <HeartIcon size={34} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="person-outline" size={28} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    paddingVertical: 10,
  },
  icon: {
    color: 'white',
  },
});

export default Footer;
