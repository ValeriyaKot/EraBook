import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './src/redux/store.js'


import FirstScreen from './src/screens/FirstScreen.js';
import ChooseGenderScreen from './src/screens/ChooseGenderScreen.js';
import ChooseAgeScreen from './src/screens/ChoosAgeScreen.js';
import ChooseGenreScreen from './src/screens/ChooseGenreScreen.js';
import CompleteProfileScreen from './src/screens/CompleteProfileScreen.js'
import CreateAccountScreen from './src/screens/CreateAccountScreen.js'
import LoginScreen from './src/screens/LoginScreen.js';



const Stack = createStackNavigator();


const App = () => {
  return (
    <Provider store={store}>
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
        <Stack.Screen
          name="Choose Genre"
          component={ChooseGenreScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Complete Profile"
          component={CompleteProfileScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Create Account"
          component={CreateAccountScreen}
          options={{ headerShown: true }}
        />
       <Stack.Screen
            name="Login"
            component={LoginScreen}  // ✅ Теперь LoginScreen правильно включен в навигацию
            options={{ headerShown: true }}
          />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
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