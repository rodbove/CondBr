import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './pages/Home';
import Main from './pages/Main';
import Loading from './pages/Loading';

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Main" component={Main} />
        <AppStack.Screen name="Loading" component={Loading} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}