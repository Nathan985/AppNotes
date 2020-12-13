import React from 'react';
import HomeLogin from './src/pages/homeLogin';
import SingIn from './src/pages/SignIn';
import MyNote from './src/pages/MyNotes'
import Register from './src/pages/Register';
import UpdateNotes from './src/pages/UpdateNote'
import CreateNote from './src/pages/CreateNote';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Home"
          component={HomeLogin}
        />
        <Stack.Screen
          name="SignIn"
          component={SingIn}
        />
        <Stack.Screen
          name="Register"
          component={Register}
        />
        <Stack.Screen 
          name="MyNotes"
          component={MyNote}
        />
        <Stack.Screen 
          name="CreateNote"
          component={CreateNote}
        />
        <Stack.Screen 
          name="UpdateNotes"
          component={UpdateNotes}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <SingIn />
    // <HomeLogin />
  );
}