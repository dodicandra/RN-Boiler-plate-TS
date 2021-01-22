import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Detail from '#screen/Detail';
import Home from '#screen/Home';

const AppStack = createStackNavigator<StackApp>();

const MainStack = () => {
  return (
    <AppStack.Navigator mode="modal">
      <AppStack.Screen component={Home} name="Home" />
      <AppStack.Screen component={Detail} name="Detail" />
    </AppStack.Navigator>
  );
};

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
export default Navigation;
