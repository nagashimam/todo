import { AngularFramework, moduleMetadata } from '@storybook/angular';
import { BehaviorSubject } from 'rxjs';
import { TodosService } from '../services/todos/todos.service';
import { TodosComponent } from './todos.component';
import { TodosModule } from './todos.module';
import {
  LongTodo,
  OneTodo,
  TwoTodo,
} from '../components/todo-list/todo-list.stories';

import {
  Tab,
  TypingStartedTabAndInput,
} from '../components/todo-input/todo-input.stories';
import { userEvent } from '@storybook/testing-library';
import { screen } from '@storybook/testing-library';
import { Args, StoryAnnotations, StoryContext } from '@storybook/csf';

class DummyTodosService {
  private todos$ = new BehaviorSubject<string[]>([]);
  getTodos$() {
    this.todos$.asObservable().subscribe((hoge) => console.log(hoge));
    return this.todos$.asObservable();
  }
  addTodo(todo: string) {
    const todos = this.todos$.getValue();
    todos.push(todo);
    this.todos$.next(todos);
  }
}

export default {
  component: TodosComponent,
  title: 'pages/todos',
  decorators: [
    moduleMetadata({
      imports: [TodosModule],
      providers: [{ provide: TodosService, useValue: new DummyTodosService() }],
    }),
  ],
  parameters: {
    paddings: {
      default: 'None',
    },
  },
};

export const TodosInitialDisplay = {
  title: 'fooo',
  storyName: '初期表示',
};
export const TodosTab = {
  storyName: 'タブ',
  play: Tab.play,
};
export const TodosButtonClicked = {
  storyName: 'ボタンクリック',
  play: async () => {
    await userEvent.click(screen.getByText('Todoを追加する'));
  },
};
export const TodosTabAndEnter: StoryAnnotations<AngularFramework, Args> = {
  storyName: 'タブ+エンター',
  play: async () => {
    await userEvent.click(screen.getByText('Todoを追加する'));
  },
};
export const TodosTabAndInput: StoryAnnotations<AngularFramework, Args> = {
  storyName: '入力',
  play: async (context: StoryContext<AngularFramework, Args>) => {
    if (TodosTabAndEnter.play) {
      await TodosTabAndEnter.play!(context);
    }
    setTimeout(async () => {
      if (TypingStartedTabAndInput.play) {
        await TypingStartedTabAndInput.play(context);
      }
    }, 500);
  },
  parameters: {
    screenshot: {
      delay: 700,
    },
  },
};

export const OneTodoCase = {
  storyName: OneTodo.storyName,
  play: async (context: StoryContext<AngularFramework, Args>) => {
    await TodosTabAndInput.play!(context);
    await userEvent.click(screen.getByText('追加'));
  },
  parameters: {
    screenshot: {
      delay: 700,
    },
  },
};

export const TwoTodoCase = {
  storyName: TwoTodo.storyName,
};

export const LongTodoCase = {
  storyName: LongTodo.storyName,
};

export const TabToChecklistCase = {
  storyName: 'タブ押下後_チェックリスト',
  play: Tab.play,
};

export const TabToButtonCase = {
  storyName: 'タブ押下後_ボタン',
  play: async (context: StoryContext<AngularFramework, Args>) => {
    await Tab.play!(context);
    await Tab.play!(context);
    await Tab.play!(context);
  },
};

export const TabToLinkCase = {
  storyName: 'タブ押下後_リンク',
  play: async (context: StoryContext<AngularFramework, Args>) => {
    await TabToButtonCase.play(context);
    await Tab.play!(context);
  },
};

// TODO: Storyの階層の作り方を工夫する。1-2-1みたいな連番にすると、ユースケースが増えて連番が変わった時にVRTで差分でまくりそう
