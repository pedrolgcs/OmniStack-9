import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from '~/pages/SignIn';
import Dashboard from '~/pages/Dashboard';
import Book from '~/pages/Book';

const Routes = createAppContainer(
  createSwitchNavigator({
    SignIn,
    Dashboard,
    Book,
  }),
);

export default Routes;
