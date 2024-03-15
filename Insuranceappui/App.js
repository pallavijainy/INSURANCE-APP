import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Home';
import Contact from './src/Contact';
import Profile from './src/Profile';
import AddVehicle from './src/AddVehicle';
import HomeStack from './src/Home';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
<Tab.Navigator>
  <Tab.Screen name="homepallavi" component={HomeStack}/>
  <Tab.Screen name="addvehicle" component={AddVehicle}/>
  <Tab.Screen name="contact" component={Contact}/>
  <Tab.Screen name="profile" component={Profile}/>
</Tab.Navigator>
    </NavigationContainer>
  );
}

