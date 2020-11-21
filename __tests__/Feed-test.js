/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Feed from '../src/components/Feed';

const testData = {
  author: 'shrestha_oshan',
  location: 'Somewhere only we know',
  likes: 0,
  caption: '',
  thumbnail: 'http://1.gravatar.com/avatar/11ae31d09f61467dc7474e9e66208c96',
  content: {
    type: 'image',
    link:
      'https://images.unsplash.com/photo-1601758003453-6c950f17727d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=',
    dimensions: {
      width: 750,
      height: 500,
    },
  },
};

it('Feed renders correctly', () => {
  renderer.create(<Feed data={testData} />);
});
