import Reactotron, { asyncStorage } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const reactotron = Reactotron.configure()
  .useReactNative()
  .use(asyncStorage())
  .use(reactotronRedux())
  .connect();

export default reactotron;
