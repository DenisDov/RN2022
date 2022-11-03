import { AppRegistry, LogBox } from 'react-native';
import App from './src/app/App';
import { name as appName } from './app.json';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

// TODO: https://github.com/Shopify/flash-list/issues/616
LogBox.ignoreLogs([
  'Warning: Failed prop type: Invalid prop `externalScrollView` of type `object` supplied to `ProgressiveListView`, expected `function`.',
]);

AppRegistry.registerComponent(appName, () => App);
