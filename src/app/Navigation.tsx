import * as React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RNBootSplash from 'react-native-bootsplash';
import { theme } from '@theme';

// Screens start
// Auth screens
import RegisterScreen from '../screens/Auth/RegisterScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
// Home screeens
import HomeScreen from '../screens/Home/HomeScreen';
import ProfileScreen from '../screens/Home/ProfileScreen';
import ProductsScreen from '../screens/Home/ProductsScreen';
import SingleProductScreen from '../screens/Home/SingleProductScreen';
// Screens end

import PlaygroundScreen from '../screens/Playground';

type StackParamList = {
  Register: undefined;
  Login: undefined;

  Home: undefined;
  Profile: undefined;
  Products: undefined;
  SingleProduct: undefined;

  Playground: undefined;
};

const navigationTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: theme.colors.background,
  },
};

const Stack = createNativeStackNavigator<StackParamList>();

const AppNavigator = () => {
  const isAuthenicated = false;
  return (
    <NavigationContainer
      theme={navigationTheme}
      onReady={() => RNBootSplash.hide({ fade: true })}>
      <Stack.Navigator>
        {/* <Stack.Screen name="Playground" component={PlaygroundScreen} /> */}
        {isAuthenicated ? (
          <Stack.Group screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Products" component={ProductsScreen} />
            <Stack.Screen
              name="SingleProduct"
              component={SingleProductScreen}
            />
          </Stack.Group>
        ) : (
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
