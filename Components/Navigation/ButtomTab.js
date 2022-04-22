import React from 'react'
import Home from '../Screens/Home/Home'
import Training from '../Screens/Training/Training'
import Activity from '../Screens/Activity/Activity'
import Profile from '../Screens/Profile/Profile' 
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import UserIcon from 'react-native-vector-icons/AntDesign';


const Tab = createMaterialBottomTabNavigator();



function ButtomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#5f35b2"
      barStyle={{ backgroundColor: '#ffffff' }}

    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Training"
        component={Training}
        options={{
          tabBarLabel: 'Trainings',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="dumbbell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Diet"
        component={Activity}
        options={{
          tabBarLabel: 'Diet',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="food" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <UserIcon name="user" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default ButtomTab