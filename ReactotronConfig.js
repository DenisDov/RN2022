import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const reactotron = Reactotron.configure()
  .useReactNative()
  .use(reactotronRedux())
  .connect();

console.tron = reactotron; // Usage: console.tron.logImportant(theme.colors);

export default reactotron;
