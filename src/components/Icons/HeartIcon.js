import React from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

const HeartIcon = (props) => (
  <TouchableOpacity>
    <Icon name="heart" {...props} />
  </TouchableOpacity>
);

export default HeartIcon;
