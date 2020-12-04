import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from '../screens/home-page/index';
import DetailPage from '../screens/detail-page/detail';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="Home Page">
    <Stack.Screen name="Home Page" component={HomePage} />
    <Stack.Screen name="Detail Page" component={DetailPage} />
  </Stack.Navigator>
);
