import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import HeartIcon from './Icons/HeartIcon';
import HomeIcon from './Icons/HomeIcon';

const Footer = ({ navigation }) => {
  const [screen, changeScreen] = React.useState('Home');
  const [routes, setRoutes] = React.useState([]);
  React.useState(() => {
    setRoutes(navigation.dangerouslyGetState().routeNames);
  }, []);
  const openTab = (name) => {
    if (!name || name === screen) {
      return;
    }
    if (!routes.includes(name)) {
      console.warn(`Tab '${name}' does not exist.`);
      return;
    }
    navigation.navigate(name);
    changeScreen(name);
  };
  return (
    <View style={styles.footerView}>
      <HomeIcon
        screen={screen}
        onPress={() => openTab('Home')}
        size={28}
        style={styles.icon}
      />
      <Icon
        name={`search${screen === 'Search' ? '' : '-outline'}`}
        size={28}
        style={styles.icon}
      />
      <Icon
        name={`add${screen === 'Add' ? '-circle-outline' : ''}`}
        size={32}
        style={styles.icon}
      />
      <HeartIcon
        screen={screen}
        onPress={() => openTab('Activities')}
        size={28}
        style={styles.icon}
      />
      <Icon
        name={`person${screen === 'Profile' ? '' : '-outline'}`}
        onPress={() => openTab('Profile')}
        size={27}
        style={styles.icon}
      />
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
