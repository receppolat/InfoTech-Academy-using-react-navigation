import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@screens/Home'
import Messages from '@screens/Messages'
import Profile from '@screens/Profile'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name = 'Messages' component={Messages} />
        <Stack.Screen name = 'Profile' component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;