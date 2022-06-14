import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Movies from '../Tabs/Movies/Movies';
import Music from '../Tabs/Music/Music';

const Tab = createMaterialTopTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: true,
          tabBarShowLabel: true,
          tabBarStyle: {backgroundColor: 'blue'},
          tabBarInactiveTintColor: 'black',
          tabBarActiveTintColor: 'white',
        }}>
        <Tab.Screen name="Movies" component={Movies} tabBarLabel="Movies" />
        <Tab.Screen name="Music" component={Music} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
