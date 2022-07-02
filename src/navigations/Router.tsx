import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BottomStackParamList,
  BottomStackRouteName,
  StackParamList,
  StackRouteName,
} from './type';
import TodoList from '../features/ToDoList';
import LanguageSwitch from '../components/LanguageSwitch';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TodoApiList from '../features/ToDoApiList';

const Stack = createNativeStackNavigator<StackParamList>();
const BottomTab = createBottomTabNavigator<BottomStackParamList>();

const RenderBottomTab = (): JSX.Element => {
  return (
    <BottomTab.Navigator initialRouteName={BottomStackRouteName.TodoList}>
      <BottomTab.Screen
        name={BottomStackRouteName.TodoList}
        component={TodoList}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name={BottomStackRouteName.TodoListAPI}
        component={TodoApiList}
        options={{headerShown: false}}
      />
    </BottomTab.Navigator>
  );
};

const renderAppStacks = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={StackRouteName.Home}
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
