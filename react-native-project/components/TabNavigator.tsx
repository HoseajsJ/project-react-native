import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ScheduleScreen from '../app/(tabs)/ScheduleScreen'; // Sesuaikan dengan path
import HomeScreen from '../app/(tabs)/index'; // Sesuaikan dengan path

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#ffffff',  // Warna ikon aktif
        tabBarInactiveTintColor: '#888',  // Warna ikon tidak aktif
        tabBarStyle: {
          backgroundColor: '#28a745',  // Warna background tab
          borderTopWidth: 0,  // Hilangkan border top
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',  // Label di bawah ikon
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          tabBarLabel: 'Schedule',  // Label di bawah ikon
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar-check" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
