import React from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

const ShareIcon = (props) => (
  <TouchableOpacity>
    <Icon name="send" {...props} />
  </TouchableOpacity>
);

export default ShareIcon;
