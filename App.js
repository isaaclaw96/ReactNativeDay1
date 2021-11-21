import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./src/containers/login";
import Register from "./src/containers/register";
import Home from "./src/containers/home";
import MoviePage from "./src/containers/moviePage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false, headerStyle: {backgroundColor:'pink'}}}/>
        <Stack.Screen name="Register" component={Register} options={{headerBackVisible: false}}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Movie" component={MoviePage} />
      </Stack.Navigator>  
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
