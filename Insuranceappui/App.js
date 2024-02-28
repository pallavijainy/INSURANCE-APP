import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Contact from './Contact';


export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
<Tab.Navigator>
  <Tab.Screen name="home" component={Home}/>
  <Tab.Screen name="contact" component={Contact}/>
</Tab.Navigator>
    </NavigationContainer>
  );
}

