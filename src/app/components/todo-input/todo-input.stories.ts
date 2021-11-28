import { TodoInputComponent } from './todo-input.component';
import userEvent from '@testing-library/user-event';

export default {
  title: 'components/todo-input',
  component: TodoInputComponent,
};

export const InitialDisplay = {
  storyName: '1.初期表示',
  args: {
    typing: false,
  },
};
export const Tab = {
  storyName: '1-1.タブ',
  args: InitialDisplay.args,
  play: () => {
    userEvent.tab();
  },
};

export const TypingStarted = {
  storyName: '2.タイピング中',
  args: {
    typing: true,
  },
};
export const TypingStartedAndTabOnce = {
  storyName: '2-1-1.タブ(1回)',
  args: TypingStarted.args,
  play: () => {
    userEvent.tab();
  },
};
export const TypingStartedAndTabTwice = {
  storyName: '2-1-2.タブ(2回)',
  args: TypingStarted.args,
  play: () => {
    userEvent.tab();
    userEvent.tab();
  },
};
export const TypingStartedAndTabThreeTimes = {
  storyName: '2-1-3.タブ(3回)',
  args: TypingStarted.args,
  play: () => {
    userEvent.tab();
    userEvent.tab();
    userEvent.tab();
  },
};
export const TypingStartedTabAndEnter = {
  storyName: '2-2.入力',
  args: TypingStarted.args,
  play: () => {
    TypingStartedAndTabOnce.play();
    userEvent.keyboard('aiuoe{Enter}kakikukeko');
  },
};
