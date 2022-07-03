import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {
  BottomStackParamList,
  BottomStackRouteName,
  StackParamList,
  StackRouteName,
} from './type';
import TodoList from '../features/ToDoList';
import LanguageSwitch from '../components/LanguageSwitch';
import TodoApiList from '../features/ToDoApiList';

import Home from '../assets/svg/home.svg';
import Rocket from '../assets/svg/rocket.svg';

const Stack = createNativeStackNavigator<StackParamList>();
const BottomTab = createBottomTabNavigator<BottomStackParamList>();

const RenderBottomTab = (): JSX.Element => {
  const {t} = useTranslation();
  return (
    <BottomTab.Navigator
      initialRouteName={BottomStackRouteName.TodoList}
      screenOptions={{tabBarHideOnKeyboard: true}}>
      <BottomTab.Screen
        name={BottomStackRouteName.TodoList}
        component={TodoList}
        options={{
          headerShown: false,
          title: t('todo'),
          tabBarIcon: () => <Home />,
        }}
      />
      <BottomTab.Screen
        name={BottomStackRouteName.TodoListAPI}
        component={TodoApiList}
        options={{
          headerShown: false,
          title: t('list'),
          tabBarIcon: () => <Rocket />,
        }}
      />
    </BottomTab.Navigator>
  );
};

const renderAppStacks = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={StackRouteName.TodoApp}
        component={RenderBottomTab}
        options={{headerRight: () => <LanguageSwitch />}}
      />
    </Stack.Navigator>
  );
};

const AppRouter = function (): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>{renderAppStacks()}</NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppRouter;
