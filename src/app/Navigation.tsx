import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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

//Tabs
import FeedScreen from '../screens/Home/FeedScreen';
import NoificationsScreen from '../screens/Home/NoificationsScreen';
import SettingsScreen from '../screens/Home/SettingsScreen';

//Common screens
import PlaygroundScreen from '../screens/Common/PlaygroundScreen';
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
  const isAuthenicated = true;
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
