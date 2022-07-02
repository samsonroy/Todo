export enum BottomStackRouteName {
  TodoList = 'TodoList',
  TodoListAPI = 'TodoListAPI',
}

export type BottomStackParamList = {
  [BottomStackRouteName.TodoList]: undefined;
  [BottomStackRouteName.TodoListAPI]: undefined;
};

export enum StackRouteName {
  TodoApp = 'TodoApp',
}

export type StackParamList = {
  [StackRouteName.TodoApp]: undefined;
};
