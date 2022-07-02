export enum BottomStackRouteName {
  TodoList = 'TodoList',
  TodoListAPI = 'TodoListAPI',
}

export type BottomStackParamList = {
  [BottomStackRouteName.TodoList]: undefined;
  [BottomStackRouteName.TodoListAPI]: undefined;
};

export enum StackRouteName {
  Home = 'home',
}

export type StackParamList = {
  [StackRouteName.Home]: undefined;
};
