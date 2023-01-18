import 'react-native-gesture-handler';
import { AppRegistry, LogBox } from 'react-native';

import { name as appName } from './app.json';
import App from './src/app/App';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

// TODO: need remove this log before release https://github.com/Shopify/flash-list/issues/616
LogBox.ignoreLogs(['Warning: ...']);

AppRegistry.registerComponent(appName, () => App);
