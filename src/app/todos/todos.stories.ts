import { moduleMetadata } from '@storybook/angular';
import { NgModuleMetadata } from '@storybook/angular/dist/ts3.9/client/preview/types';
import { of } from 'rxjs';
import { TodosService } from '../services/todos/todos.service';
import { TodosComponent } from './todos.component';
import { TodosModule } from './todos.module';
import {
  LongTodo,
  NoTodo,
  OneTodo,
  Tab,
  TwoTodo,
} from '../components/todo-list/todo-list.stories';

const module: (todos: string[]) => Partial<NgModuleMetadata> = (todos) => ({
  imports: [TodosModule],
  providers: [
    {
      provide: TodosService,
      useValue: {
        getTodos$: () => of(todos),
      },
    },
  ],
});

export default {
  component: TodosComponent,
  title: 'todos',
  parameters: {
    paddings: {
      default: 'None',
    },
  },
};

export const NoTodoCase = {
  storyName: NoTodo.storyName,
  decorators: [moduleMetadata(module(NoTodo.args.todos))],
};

export const OneTodoCase = {
  storyName: OneTodo.storyName,
  decorators: [moduleMetadata(module(OneTodo.args.todos))],
};

export const TwoTodoCase = {
  storyName: TwoTodo.storyName,
  decorators: [moduleMetadata(module(TwoTodo.args.todos))],
};

export const LongTodoCase = {
  storyName: LongTodo.storyName,
  decorators: [moduleMetadata(module(LongTodo.args.todos))],
};

export const TabToChecklistCase = {
  storyName: 'タブ押下後_チェックリスト',
  decorators: [moduleMetadata(module(Tab.args.todos))],
  play: Tab.play,
};

export const TabToLinkCase = {
  storyName: 'タブ押下後_リンク',
  decorators: [moduleMetadata(module(Tab.args.todos))],
  play: () => {
    Tab.play();
    Tab.play();
    Tab.play();
  },
};
