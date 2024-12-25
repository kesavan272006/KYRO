import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Index from './index';
import Home from './home';
import About from './about';

const Stack = createStackNavigator();

const Layout = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Index">
      <Stack.Screen name="Index" component={Index} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="about" component={About} />
    </Stack.Navigator>
  );
};

export default Layout;