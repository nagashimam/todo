import { TodoListComponent } from './todo-list.component';
import userEvent from '@testing-library/user-event';
import { Story, moduleMetadata } from '@storybook/angular';
import { TodoListModule } from './todo-list.module';

export default {
  component: TodoListComponent,
  title: 'components/todo-list',
  decorators: [
    moduleMetadata({
      imports: [TodoListModule],
    }),
  ],
};

export const NoTodo = {
  storyName: '1つもない',
};
export const OneTodo = {
  args: {
    todos: ['パン'],
  },
  storyName: '1つ',
};
export const TwoTodo = {
  args: {
    todos: ['パン', '卵'],
  },
  storyName: '2つ',
};
export const LongTodo = {
  args: {
    todos: [
      'パン',
      '卵',
      'エクストラバニラエクストラキャラメルエクストラヘーゼルナッツエクストラクラシックエクストラチャイフラペチーノ',
    ],
  },
  storyName: '長い文字',
};
export const Tab = {
  args: TwoTodo.args,
  storyName: 'タブ押下後',
  play: () => {
    userEvent.tab();
  },
};

const MarginCheckTemplate: Story<TodoListComponent> = (args) => ({
  props: args,
  template: `
    <p>リストの上下にマージンはない</p>
    <div style="height:0.5rem;background-color:var(--primary)"></div>
    <app-todo-list [todos]="todos" ></app-todo-list>
    <div style="height:0.5rem;background-color:var(--primary)"></div>
  `,
});
export const MarginCheck = MarginCheckTemplate.bind({});
MarginCheck.args = TwoTodo.args;
MarginCheck.storyName = 'マージンチェック';
