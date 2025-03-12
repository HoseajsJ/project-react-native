// import { Tabs } from 'expo-router';
// import { Ionicons } from '@expo/vector-icons';

// export default function TabsLayout() {
//   return (
//     <Tabs
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName: keyof typeof Ionicons.glyphMap;

//           switch (route.name) {
//             case 'home':
//               iconName = focused ? 'home' : 'home-outline';
//               break;
//             case 'schedule':
//               iconName = focused ? 'calendar' : 'calendar-outline';
//               break;
//             case 'achievements':
//               iconName = focused ? 'trophy' : 'trophy-outline';
//               break;
//             case 'profile':
//               iconName = focused ? 'person' : 'person-outline';
//               break;
//             default:
//               iconName = 'ellipse-outline';
//           }

//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: '#007bff',
//         tabBarInactiveTintColor: 'gray',
//         tabBarStyle: { height: 60, paddingBottom: 10 },
//       })}
//     >
//       <Tabs.Screen 
//         name="home" 
//         options={{
//           title: 'Home'
//         }}
//       />
//       <Tabs.Screen 
//         name="schedule" 
//         options={{
//           title: 'Schedule'
//         }}
//       />
//       <Tabs.Screen 
//         name="achievements" 
//         options={{
//           title: 'Achievements'
//         }}
//       />
//       <Tabs.Screen 
//         name="profile" 
//         options={{
//           title: 'Profile'
//         }}
//       />
//     </Tabs>
//   );
// }