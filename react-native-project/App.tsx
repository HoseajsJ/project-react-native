// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import { MaterialCommunityIcons } from 'react-native-vector-icons'; // Untuk ikon tab
// import { Text } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import ScheduleScreen from './ScheduleScreen'; // Pastikan path sesuai
// import HomeScreen from './HomeScreen'; // Pastikan path sesuai

// // Membuat Tab Navigator
// const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       tabBarOptions={{
//         activeTintColor: '#ffffff', // Warna ikon aktif
//         inactiveTintColor: '#888', // Warna ikon tidak aktif
//         style: {
//           backgroundColor: '#28a745', // Waimport React from 'react';
//           import { NavigationContainer } from '@react-navigation/native';
//           import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//           import { MaterialCommunityIcons } from 'react-native-vector-icons';
//           import ScheduleScreen from './screens/ScheduleScreen'; // Sesuaikan dengan path
//           import HomeScreen from './screens/HomeScreen'; // Sesuaikan dengan path
          
//           const Tab = createBottomTabNavigator();
          
//           const TabNavigator = () => {
//             return (
//               <Tab.Navigator
//                 initialRouteName="Home"
//                 tabBarOptions={{
//                   activeTintColor: '#ffffff',
//                   inactiveTintColor: '#888',
//                   style: {
//                     backgroundColor: '#28a745',
//                     borderTopWidth: 0,
//                   },
//                 }}
//               >
//                 <Tab.Screen
//                   name="Home"
//                   component={HomeScreen}
//                   options={{
//                     tabBarLabel: 'Home',
//                     tabBarIcon: ({ color, size }) => (
//                       <MaterialCommunityIcons name="home" color={color} size={size} />
//                     ),
//                   }}
//                 />
//                 <Tab.Screen
//                   name="Schedule"
//                   component={ScheduleScreen}
//                   options={{
//                     tabBarLabel: 'Schedule',
//                     tabBarIcon: ({ color, size }) => (
//                       <MaterialCommunityIcons name="calendar-check" color={color} size={size} />
//                     ),
//                   }}
//                 />
//               </Tab.Navigator>
//             );
//           };
          
//           const App = () => {
//             return (
//               <NavigationContainer>
//                 <TabNavigator />
//               </NavigationContainer>
//             );
//           };
          
//           export default App;
//           rna background tab
//           borderTopWidth: 0, // Hilangkan border top
//         },
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarLabel: 'Home', // Label di bawah ikon
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Schedule"
//         component={ScheduleScreen}
//         options={{
//           tabBarLabel: 'Schedule', // Label di bawah ikon
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="calendar-check" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <TabNavigator />
//     </NavigationContainer>
//   );
// };

// export default App;
