import Page1 from './page1';
import Page2 from './page2';

import {
  createAppContainer,
  createStackNavigator,
} from '@react-navigation/native';

const Routes = createAppContainer(
  createStackNavigator({
    Home: Page1,
    About: Page2,
  }),
);

export default Routes;
