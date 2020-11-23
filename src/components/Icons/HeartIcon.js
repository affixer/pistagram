import React from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

const HeartIcon = (props) => (
  <TouchableOpacity>
    <Icon
      name={`heart${props.screen === 'Activities' ? '' : '-outlined'}`}
      {...props}
    />
  </TouchableOpacity>
);

export default HeartIcon;
