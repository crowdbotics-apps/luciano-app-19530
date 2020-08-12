import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial90050Navigator from '../features/Tutorial90050/navigator';
import NotificationList90022Navigator from '../features/NotificationList90022/navigator';
import Settings90021Navigator from '../features/Settings90021/navigator';
import Settings90013Navigator from '../features/Settings90013/navigator';
import UserProfile90011Navigator from '../features/UserProfile90011/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial90050: { screen: Tutorial90050Navigator },
NotificationList90022: { screen: NotificationList90022Navigator },
Settings90021: { screen: Settings90021Navigator },
Settings90013: { screen: Settings90013Navigator },
UserProfile90011: { screen: UserProfile90011Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
