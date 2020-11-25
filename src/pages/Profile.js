import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from '../components/Header';

const profile = {
  handle: 'shrestha_oshan',
  name: 'Oshan Shrestha',
  bio: 'I code. I travel. I eat.',
  displayPicture:
    'http://1.gravatar.com/avatar/11ae31d09f61467dc7474e9e66208c96',
  website: 'lintr.ee/shresthaoshan',
  stat: {
    posts: 165,
    followers: 397,
    following: 409,
  },
};

const ProfileContext = React.createContext();

const Profile = () => {
  return (
    <ProfileContext.Provider value={profile}>
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
        <View style={styles.profileData}>
          <View style={styles.profile}>
            <ProfileHeading data={profile} />
            <ProfileStat data={profile} />
          </View>
          <ProfileControls />
        </View>
      </View>
    </ProfileContext.Provider>
  );
};

const ProfileControls = () => {
  return (
    <View style={styles.buttons}>
      <Button
        title="Edit Profile"
        type="outline"
        onPress={() => console.log('Edit Profile Now')}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.buttonTextStyle}
      />
      <View style={styles.buttonGroup}>
        <View style={styles.groupedButton}>
          <Button
            title="Promotions"
            type="outline"
            onPress={() => console.log('Promote')}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonTextStyle}
          />
        </View>
        <View style={styles.groupedButton}>
          <Button
            title="Insights"
            type="outline"
            onPress={() => console.log('Insights Now')}
            // eslint-disable-next-line react-native/no-inline-styles
            buttonStyle={[styles.buttonStyle, { marginHorizontal: 5 }]}
            titleStyle={styles.buttonTextStyle}
          />
        </View>
        <View style={styles.groupedButton}>
          <Button
            title="Contact"
            type="outline"
            onPress={() => console.log('Contact Now')}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonTextStyle}
          />
        </View>
      </View>
    </View>
  );
};
const ProfileStat = () => {
  const { stat } = React.useContext(ProfileContext);
  return (
    <View style={styles.statView}>
      <View style={styles.stat}>
        <Text style={styles.statData}>{stat.posts}</Text>
        <Text style={styles.statInfo}>Posts</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.statData}>{stat.followers}</Text>
        <Text style={styles.statInfo}>Followers</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.statData}>{stat.following}</Text>
        <Text style={styles.statInfo}>Following</Text>
      </View>
    </View>
  );
};

const ProfileHeading = () => {
  const data = React.useContext(ProfileContext);
  return (
    <View style={styles.profileHeading}>
      <View style={styles.displayPicture}>
        <Image
          style={styles.displayPictureImage}
          source={{ uri: data.displayPicture }}
        />
      </View>
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.bio}>{data.bio ?? ''}</Text>
      {data.website ? (
        <Text style={styles.website}>{data.website ?? ''}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  profileView: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    color: 'white',
    marginHorizontal: 5,
  },
  profile: {
    flexDirection: 'row',
  },
  profileHeading: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  displayPicture: {
    marginVertical: 10,
  },
  displayPictureImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  name: {
    color: 'white',
    fontSize: 15,
  },
  bio: {
    color: 'white',
    fontSize: 14,
  },
  website: {
    color: 'lightblue',
    fontSize: 14,
  },
  statView: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-between',
    padding: 10,
  },
  stat: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  statData: {
    color: 'white',
    fontSize: 18,
  },
  statInfo: {
    color: 'white',
    fontSize: 13,
  },
  buttons: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  feedView: {
    flex: 1,
    backgroundColor: 'blue',
  },
  buttonStyle: {
    borderColor: 'grey',
    borderWidth: 1,
    backgroundColor: 'black',
  },
  buttonTextStyle: {
    color: 'white',
    fontSize: 15,
  },
  buttonGroup: {
    marginVertical: 5,
    flexDirection: 'row',
  },
  groupedButton: {
    flex: 1 / 3,
  },
});

export default Profile;
