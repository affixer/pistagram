import React from 'react';

import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native';

const MoreVerticalIcon = (props) => (
  <TouchableOpacity>
    <Icon name="more-vertical" {...props} />
  </TouchableOpacity>
);

export default MoreVerticalIcon;
