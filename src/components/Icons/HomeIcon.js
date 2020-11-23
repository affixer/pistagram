import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native';

const HomeIcon = (props) => (
  <TouchableOpacity>
    <Icon
      name={`home-variant${props.screen === 'Home' ? '' : '-outline'}`}
      {...props}
    />
  </TouchableOpacity>
);

export default HomeIcon;
