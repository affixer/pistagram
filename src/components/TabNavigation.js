import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Activities from '../pages/Activities';
import Profile from '../pages/Profile';

import Footer from './Footer';

const Tab = createBottomTabNavigator();

const TabNavigation = () => (
  <Tab.Navigator tabBar={(props) => <Footer {...props} />}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Activities" component={Activities} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

export default TabNavigation;
