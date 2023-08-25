import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from './component/Splash';
import Login from './component/Login';
import Home from './component/Home';
import Signup from './component/Signup';
const Stack=createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
    <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
    <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
    <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
    </Stack.Navigator>
   </NavigationContainer>
   
  )
}

export default AppNavigator