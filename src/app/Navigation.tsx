import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import RNBootSplash from 'react-native-bootsplash';

import { RootStackParamList } from '../@types/navigation';
//Auth screens
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import WelcomeScreen from '../screens/Auth/WelcomeScreen';
// Common screens
import PlaygroundScreen from '../screens/Common/PlaygroundScreen';
// Home screens
import FeedScreen from '../screens/Home/FeedScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import NoificationsScreen from '../screens/Home/NoificationsScreen';
import ProductsScreen from '../screens/Home/ProductsScreen';
import ProfileScreen from '../screens/Home/ProfileScreen';
import SettingsScreen from '../screens/Home/SettingsScreen';
import SingleProductScreen from '../screens/Home/SingleProductScreen';

// Screens end

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const HomeTabStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="SingleProduct" component={SingleProductScreen} />
      <Stack.Screen name="Playground" component={PlaygroundScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  const isAuthenicated = false;
  return (
    <NavigationContainer
      // theme={DarkTheme}
      onReady={() => RNBootSplash.hide({ fade: true })}>
      {isAuthenicated ? (
        <Tab.Navigator
        // screenOptions={{ headerShown: false }}
        >
          <Tab.Screen
            name="HomeTab"
            component={HomeTabStack}
            options={{ headerShown: false }}
          />
          <Tab.Screen name="FeedTab" component={FeedScreen} />
          <Tab.Screen name="NoificationsTab" component={NoificationsScreen} />
          <Tab.Screen name="SettingsTab" component={SettingsScreen} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
