import * as React from 'react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RNBootSplash from 'react-native-bootsplash';

import { RootStackParamList } from '../@types/navigation';

// Screens start
// Auth screens
import WelcomeScreen from '../screens/Auth/WelcomeScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
// Home screeens
import HomeScreen from '../screens/Home/HomeScreen';
import ProfileScreen from '../screens/Home/ProfileScreen';
import ProductsScreen from '../screens/Home/ProductsScreen';
import SingleProductScreen from '../screens/Home/SingleProductScreen';
//Common screens
import PlaygroundScreen from '../screens/Common/PlaygroundScreen';
// Screens end

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const isAuthenicated = true;
  return (
    <NavigationContainer
      // theme={DarkTheme}
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
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
