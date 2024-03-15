import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home';
import Contact from '../Contact';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
    />
<Stack.Screen
      name="contact"
      component={Contact}
    />
  </Stack.Navigator>
  )
}

export default HomeStack
