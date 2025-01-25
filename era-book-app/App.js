import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import FirstScreen from './src/screens/FirstScreen.js';


const Stack = createStackNavigator();


const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Pitch"
            component={FirstScreen} />
          {/* <Stack.Screen
            name="Home"
            component={HomeTabNavigator}
            options={{ headerShown: false }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    headerTitleAlign: 'center',
    headerTintColor: '#874ECF',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#874ECF',
      justifyContent: 'center',
    },
  },
});

export default App;