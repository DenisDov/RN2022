import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@shopify/restyle';
import * as React from 'react';
import RNBootSplash from 'react-native-bootsplash';

import { RootStackParamList } from '../@types/navigation';
import { TabIcon } from '../components/TabIcon';
import { useAuth } from '../hooks/useAuth';
import LoginScreen from '../screens/Auth/LoginScreen';
import OnboardingScreen from '../screens/Auth/OnboardingScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import WelcomeScreen from '../screens/Auth/WelcomeScreen';
import PlaygroundScreen from '../screens/Common/PlaygroundScreen';
import CameraPermissionsScreen from '../screens/Home/CameraStack/CameraPermissionsScreen';
import CameraScreen from '../screens/Home/CameraStack/CameraScreen';
import GalleryScreen from '../screens/Home/GalleryScreen';
import HomeScreen from '../screens/Home/HomeStack/HomeScreen';
import ProductsScreen from '../screens/Home/HomeStack/ProductsScreen';
import ProfileScreen from '../screens/Home/HomeStack/ProfileScreen';
import SingleProductScreen from '../screens/Home/HomeStack/SingleProductScreen';
import MapScreen from '../screens/Home/MapScreen';
import AccordionScreen from '../screens/Home/SettingsStack/AccordionScreen';
import ActionSheetsScreen from '../screens/Home/SettingsStack/ActionSheets';
import AppSettingsScreen from '../screens/Home/SettingsStack/AppSettingsScreen';
import DocumentPickerScreen from '../screens/Home/SettingsStack/DocumentPickerScreen';
import HTMLScreen from '../screens/Home/SettingsStack/HTMLScreen';
import ImagePickerScreen from '../screens/Home/SettingsStack/ImagePickerScreen';
import MotiScreen from '../screens/Home/SettingsStack/MotiScreen';
import SettingsScreen from '../screens/Home/SettingsStack/SettingsScreen';
import VideoScreen from '../screens/Home/SettingsStack/VideoScreen';
import VimeoScreen from '../screens/Home/SettingsStack/VimeoScreen';
import WebViewScreen from '../screens/Home/SettingsStack/WebViewScreen';
import YoutubeScreen from '../screens/Home/SettingsStack/YoutubeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const HomeTabStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="SingleProduct" component={SingleProductScreen} />
      <Stack.Screen name="Playground" component={PlaygroundScreen} />
    </Stack.Navigator>
  );
};

const CameraTabStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="CameraPermissionsScreen"
        component={CameraPermissionsScreen}
      />
      <Stack.Screen name="CameraScreen" component={CameraScreen} />
    </Stack.Navigator>
  );
};

const SettingsTabStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="ActionSheetsScreen" component={ActionSheetsScreen} />
      <Stack.Screen name="MotiScreen" component={MotiScreen} />
      <Stack.Screen name="AccordionScreen" component={AccordionScreen} />
      <Stack.Screen name="AppSettingsScreen" component={AppSettingsScreen} />
      <Stack.Screen name="HTMLScreen" component={HTMLScreen} />
      <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
      <Stack.Screen name="ImagePickerScreen" component={ImagePickerScreen} />
      <Stack.Screen name="VideoScreen" component={VideoScreen} />
      <Stack.Screen name="YoutubeScreen" component={YoutubeScreen} />
      <Stack.Screen name="VimeoScreen" component={VimeoScreen} />
      <Stack.Screen
        name="DocumentPickerScreen"
        component={DocumentPickerScreen}
      />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  const auth = useAuth();
  const isAuthenicated = !!auth?.user?.token;
  const appTheme = useTheme();
  return (
    <NavigationContainer
      theme={DarkTheme}
      onReady={() => RNBootSplash.hide({ fade: true })}>
      {isAuthenicated ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon routeName={route.name} isFocused={focused} />
            ),
            tabBarStyle: {
              backgroundColor: '#1A1B1E',
              borderTopColor: appTheme.colors.muted,
            },
          })}>
          <Tab.Screen name="HomeTab" component={HomeTabStack} />
          <Tab.Screen name="GalleryTab" component={GalleryScreen} />
          <Tab.Screen name="MapTab" component={MapScreen} />
          <Tab.Screen
            name="CameraTab"
            component={CameraTabStack}
            options={{ headerShown: false }}
          />
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
              // animation: 'none',
              // When logging out, a pop animation feels intuitive
              // You can remove this if you want the default 'push' animation
              animationTypeForReplace: 'pop',
            }}
          />
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default React.memo(RootNavigator);
