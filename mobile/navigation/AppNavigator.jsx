import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/Welcome/WelcomeScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import TrainerListScreen from '../screens/Trainer/TrainerListScreen';
import TrainerDetailScreen from '../screens/Trainer/TrainerDetailScreen';
import TrainerDashboard from '../screens/Trainer/TrainerDashboard';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Trainers" component={TrainerListScreen} />
        <Stack.Screen name="TrainerDetail" component={TrainerDetailScreen} />
        <Stack.Screen name="TrainerDashboard" component={TrainerDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
