import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './homescreen';
import ForecastScreen from './ForecastScreen';
import SwitchPage from './switchpage'; // Ensure this import matches the component name
import CityInput from './CityInput'; // Import the CityInput screen
import InfoScreen from './InfoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="switchpage">
        <Stack.Screen
          name="switchpage"
          component={SwitchPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Forecast"
          component={ForecastScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CityInput"
          component={CityInput}
          options={{ headerShown: false }}
        />
        <Stack.Screen
        name="InfoScreen"
        component={InfoScreen}
        options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
