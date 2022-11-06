import * as React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RNBootSplash from 'react-native-bootsplash';

// Screens start
// Auth screens

// Home screeens
import HomeScreen from '../screens/Home/HomeScreen';
import ProfileScreen from '../screens/Home/ProfileScreen';
import ProductsScreen from '../screens/Home/ProductsScreen';
import SingleProductScreen from '../screens/Home/SingleProductScreen';
// Screens end

type StackParamList = {
  Home: undefined;
  Profile: undefined;
  Products: undefined;
  SingleProduct: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer
      theme={DarkTheme}
      onReady={() => RNBootSplash.hide({ fade: true })}>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="SingleProduct" component={SingleProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
