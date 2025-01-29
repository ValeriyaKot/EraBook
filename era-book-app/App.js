import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import FirstScreen from './src/screens/FirstScreen.js';
import ChooseGenderScreen from './src/screens/ChooseGenderScreen.js';
import ChooseAgeScreen from './src/screens/ChoosAgeScreen.js';


const Stack = createStackNavigator();


const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="EraBook"
            component={FirstScreen} />
          <Stack.Screen
            name="Choose Gender"
            component={ChooseGenderScreen}
            options={{ headerShown: true }}
          />
           <Stack.Screen
            name="Choose Age"
            component={ChooseAgeScreen}
            options={{ headerShown: true }}
          />
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