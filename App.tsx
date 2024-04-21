import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LandingScreen from './screen/LandingScreen';
import LoginScreen from './screen/LoginScreen';
import ForgotPassword from './screen/ForgotPassword';
import ResetEmail from './screen/ResetEmail';
import CreateAccount from './screen/CreateAccount';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import BottomNavigation from './Components/BottomNavigation';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name="LandingScreen" component={LandingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ headerShown: false }} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
      <Stack.Screen name="ResetEmail" component={ResetEmail} options={{ headerShown: false }} />
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={{ headerShown: false }} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}


