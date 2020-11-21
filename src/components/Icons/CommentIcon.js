import React from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const CommentIcon = (props) => (
  <TouchableOpacity>
    <Icon name="chatbubble-outline" {...props} />
  </TouchableOpacity>
);

export default CommentIcon;
