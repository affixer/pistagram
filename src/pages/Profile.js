import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from '../components/Header';

const profile = {
  handle: 'shrestha_oshan',
  displayPicture:
    'http://1.gravatar.com/avatar/11ae31d09f61467dc7474e9e66208c96',
};

const Profile = () => {
  return (
    <View style={styles.profileView}>
      <Header
        title={profile.handle}
        icon={
          <View style={styles.headerIcons}>
            <Icon name="add" size={28} style={styles.icon} />
            <Icon name="menu-outline" size={28} style={styles.icon} />
          </View>
        }
      />
      <View style={styles.profile}>
        <ProfileHeading data={profile} />
      </View>
    </View>
  );
};

const ProfileHeading = ({ data }) => {
  return (
    <View style={styles.profileHeading}>
      <View style={styles.displayPicture}>
        <Image
          style={styles.displayPictureImage}
          source={{ uri: data.displayPicture }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileView: {
    flex: 1,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    color: 'white',
    marginHorizontal: 5,
  },
  profileHeading: {
    backgroundColor: 'black',
    paddingHorizontal: 10,
  },
  displayPicture: {
    marginVertical: 10,
  },
  displayPictureImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
});

export default Profile;
