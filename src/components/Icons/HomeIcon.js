import React from 'react';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { TouchableOpacity } from 'react-native';

const HomeIcon = (props) => (
  <TouchableOpacity>
    <Icon name="home" {...props} />
  </TouchableOpacity>
);

export default HomeIcon;
