import React from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const BookmarkIcon = (props) => (
  <TouchableOpacity>
    <Icon name="bookmark-o" {...props} />
  </TouchableOpacity>
);

export default BookmarkIcon;
