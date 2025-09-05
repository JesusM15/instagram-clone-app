import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import ExploreScreen from '../screens/ExploreScreen';
import AddScreen from '../screens/AddScreen';
import ReelScreen from '../screens/ReelScreen';
import ProfileScreen from '../screens/ProfileScreen';

import pp from './../assets/pp.jpg';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false, 
        tabBarStyle: {
          backgroundColor: 'black', 
          borderTopWidth: 1,
          borderColor: "#333",
          paddingTop: 4,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Search':
              iconName = focused ? 'search' : 'search-outline';
              break;
            case 'Add':
              iconName = focused ? 'add' : 'add-outline';
              break;
            case 'Reels':
              iconName = focused ? 'play-circle' : 'play-circle-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              iconName = 'ellipse';
          }
          if(route.name === "Profile"){ 
            return <>
              <Image 
                style={{
                  width: 24,
                  objectFit: 'contain',
                  height: 24,
                  borderRadius: 99999,
                }}
                source={pp} 
              />
            </>
          }
          return <Ionicons name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={ExploreScreen} />
      <Tab.Screen name="Add" component={AddScreen} />
      <Tab.Screen name="Reels" component={ReelScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function MainNavigator() {
  const login = true;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {login ? (
        <Stack.Screen name="Tabs" component={Tabs} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
}
