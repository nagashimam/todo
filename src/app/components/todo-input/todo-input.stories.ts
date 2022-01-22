import { TodoInputComponent } from './todo-input.component';
import { userEvent } from '@storybook/testing-library';
import { Args, StoryAnnotations, StoryContext } from '@storybook/csf';
import { AngularFramework, Meta } from '@storybook/angular';

export default {
  title: 'components/todo-input',
  component: TodoInputComponent,
} as Meta;

export const InitialDisplay: StoryAnnotations<
  AngularFramework,
  TodoInputComponent
> = {
  storyName: '初期表示',
  args: {
    typing: false,
  },
};

export const Tab: StoryAnnotations<AngularFramework, Args> = {
  storyName: '初期表示_タブ',
  args: InitialDisplay.args,
  play: async () => {
    await userEvent.tab();
  },
};

export const TypingStarted: StoryAnnotations<
  AngularFramework,
  TodoInputComponent
> = {
  storyName: 'タイピング中',
  args: {
    typing: true,
  },
};

export const TypingStartedTabAndInput: StoryAnnotations<
  AngularFramework,
  Args
> = {
  storyName: 'タイピング中_入力',
  args: TypingStarted.args,
  play: async () => {
    await userEvent.keyboard('aiuoe{Enter}kakikukeko');
  },
};

export const TypingStartedAndTabOnce: StoryAnnotations<
  AngularFramework,
  TodoInputComponent
> = {
  storyName: 'タイピング中_タブ(1回)',
  args: TypingStarted.args,
  play: async (context: StoryContext<AngularFramework, TodoInputComponent>) => {
    if (TypingStartedTabAndInput.play) {
      await TypingStartedTabAndInput.play(context);
    }
    await userEvent.tab();
  },
};
export const TypingStartedAndTabTwice: StoryAnnotations<
  AngularFramework,
  TodoInputComponent
> = {
  storyName: 'タイピング中_タブ(2回)',
  args: TypingStarted.args,
  play: async (context: StoryContext<AngularFramework, TodoInputComponent>) => {
    if (TypingStartedTabAndInput.play) {
      await TypingStartedTabAndInput.play(context);
    }
    await userEvent.tab();
    await userEvent.tab();
  },
};
