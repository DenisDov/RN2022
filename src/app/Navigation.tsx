import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { BaseButton, RectButton } from 'react-native-gesture-handler';

import { RootStackParamList } from '../@types/navigation';
import { Hamburger } from '../components/Icons/Hamburger';
import Grid from '../components/Icons/tabs/Grid';
import GridOutline from '../components/Icons/tabs/GridOutline';
import Home from '../components/Icons/tabs/Home';
import HomeOutline from '../components/Icons/tabs/HomeOutline';
import { useAuth } from '../hooks/useAuth';
//Auth screens
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import WelcomeScreen from '../screens/Auth/WelcomeScreen';
// Common screens
import PlaygroundScreen from '../screens/Common/PlaygroundScreen';
// Home screens
import FeedScreen from '../screens/Home/FeedScreen';
import HomeScreen from '../screens/Home/HomeStack/HomeScreen';
import ProductsScreen from '../screens/Home/HomeStack/ProductsScreen';
import ProfileScreen from '../screens/Home/HomeStack/ProfileScreen';
import SingleProductScreen from '../screens/Home/HomeStack/SingleProductScreen';
import NoificationsScreen from '../screens/Home/NoificationsScreen';
import HTMLScreen from '../screens/Home/SettingsStack/HTMLScreen';
import SettingsScreen from '../screens/Home/SettingsStack/SettingsScreen';
import VideoScreen from '../screens/Home/SettingsStack/VideoScreen';
import { Text } from '../theme';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

// const TabBarIcons = ({ route, focused }) => {
//   // console.log('color: ', color);
//   // let iconName;
//   let icon;
//   if (route.name === 'HomeTab') {
//     icon = focused ? <Home /> : <HomeOutline />;
//   } else if (route.name === 'SettingsTab') {
//     icon = focused ? <Grid /> : <GridOutline />;
//   }

//   return (
//     <RectButton
//       style={{
//         width: '100%',
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//       {icon}
//     </RectButton>
//   );
// };

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

const SettingsTabStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="HTMLScreen" component={HTMLScreen} />
      <Stack.Screen name="VideoScreen" component={VideoScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  const auth = useAuth();
  const isAuthenicated = !!auth?.user?.token || false;
  return (
    <NavigationContainer
      // theme={DarkTheme}
      onReady={() => RNBootSplash.hide({ fade: true })}>
      {isAuthenicated ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            // headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, color, size }) => {
              // console.log('color: ', color);
              // let iconName;
              let icon;
              let label;
              if (route.name === 'HomeTab') {
                icon = focused ? <Home /> : <HomeOutline />;
                label = 'Home';
              } else if (route.name === 'SettingsTab') {
                icon = focused ? <Grid /> : <GridOutline />;
                label = 'Settings';
              }

              return (
                <RectButton
                  style={{
                    width: '100%',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {icon}
                  {/* <Text fontSize={10} color="secondary">
                    {label}
                  </Text> */}
                </RectButton>
              );
            },
          })}>
          <Tab.Screen
            name="HomeTab"
            component={HomeTabStack}
            options={{ headerShown: false }}
          />
          <Tab.Screen name="FeedTab" component={FeedScreen} />
          <Tab.Screen name="NoificationsTab" component={NoificationsScreen} />
          <Tab.Screen
            name="SettingsTab"
            component={SettingsTabStack}
            options={{ headerShown: false }}
          />
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
