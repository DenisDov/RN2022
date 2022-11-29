import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import RNBootSplash from 'react-native-bootsplash';

import { RootStackParamList } from '../@types/navigation';
import { TabIcon } from '../components/TabIcon';
import { useAuth } from '../hooks/useAuth';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import WelcomeScreen from '../screens/Auth/WelcomeScreen';
import PlaygroundScreen from '../screens/Common/PlaygroundScreen';
import CameraScreen from '../screens/Home/CameraScreen';
import GalleryScreen from '../screens/Home/GalleryScreen';
import HomeScreen from '../screens/Home/HomeStack/HomeScreen';
import ProductsScreen from '../screens/Home/HomeStack/ProductsScreen';
import ProfileScreen from '../screens/Home/HomeStack/ProfileScreen';
import SingleProductScreen from '../screens/Home/HomeStack/SingleProductScreen';
import MapScreen from '../screens/Home/MapScreen';
import HTMLScreen from '../screens/Home/SettingsStack/HTMLScreen';
import ImagePickerScreen from '../screens/Home/SettingsStack/ImagePickerScreen';
import SettingsScreen from '../screens/Home/SettingsStack/SettingsScreen';
import VideoScreen from '../screens/Home/SettingsStack/VideoScreen';
import VimeoScreen from '../screens/Home/SettingsStack/VimeoScreen';
import WebViewScreen from '../screens/Home/SettingsStack/WebViewScreen';
import YoutubeScreen from '../screens/Home/SettingsStack/YoutubeScreen';

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

const SettingsTabStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="HTMLScreen" component={HTMLScreen} />
      <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
      <Stack.Screen name="ImagePickerScreen" component={ImagePickerScreen} />
      <Stack.Screen name="VideoScreen" component={VideoScreen} />
      <Stack.Screen name="YoutubeScreen" component={YoutubeScreen} />
      <Stack.Screen name="VimeoScreen" component={VimeoScreen} />
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
            tabBarIcon: ({ focused }) => (
              <TabIcon routeName={route.name} isFocused={focused} />
            ),
          })}>
          <Tab.Screen
            name="HomeTab"
            component={HomeTabStack}
            options={{ headerShown: false }}
          />
          <Tab.Screen name="GalleryTab" component={GalleryScreen} />
          <Tab.Screen name="MapTab" component={MapScreen} />
          <Tab.Screen name="CameraTab" component={CameraScreen} />
          <Tab.Screen
            name="SettingsTab"
            component={SettingsTabStack}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              // Prevent double animation after logout
              animation: 'none',
            }}
          />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
