import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackParamList, StackRouteName} from './type';
import TodoList from '../features/ToDoList';
import LanguageSwitch from '../components/LanguageSwitch';

const Stack = createNativeStackNavigator<StackParamList>();

const renderAppStacks = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName={StackRouteName.TodoList}>
      <Stack.Screen
        name={StackRouteName.TodoList}
        component={TodoList}
        options={{headerRight: () => <LanguageSwitch />}}
      />
    </Stack.Navigator>
  );
};

const AppRouter = function (): JSX.Element {
  return <NavigationContainer>{renderAppStacks()}</NavigationContainer>;
};

export default AppRouter;
