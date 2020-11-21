/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

it('Header renders correctly', () => {
  renderer.create(<Header />);
});
it('Footer renders correctly', () => {
  renderer.create(<Footer />);
});
