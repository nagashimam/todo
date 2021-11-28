import { TodoInputComponent } from './todo-input.component';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/angular';
export default {
  title: 'components/todo-input',
  component: TodoInputComponent,
};

export const InitialDisplay = {
  storyName: '0.初期表示',
};

export const Tab = {
  storyName: '1.タブ',
  play: () => {
    userEvent.tab();
  },
};

export const ClickLabel = {
  storyName: '2.ラベルをクリック',
  play: () => {
    userEvent.click(screen.getByText('Todoを追加する'));
  },
};

export const TabAndEnter = {
  storyName: '2.タブ + エンター',
  play: () => {
    Tab.play();
    userEvent.keyboard('{Enter}');
  },
};

export const TabEnterAndTab = {
  storyName: '3.タブ + エンター + タブ(1回)',
  play: () => {
    TabAndEnter.play();
    userEvent.tab();
  },
};

export const TabEnterAndTabTwice = {
  storyName: '4.タブ + エンター + タブ(2回)',
  play: () => {
    TabEnterAndTab.play();
    userEvent.tab();
  },
};

export const TabEnterAndTabThreeTimes = {
  storyName: '5.タブ + エンター + タブ(3回)',
  play: () => {
    TabEnterAndTabTwice.play();
    userEvent.tab();
  },
};

export const TabEnterAndAdd = {
  storyName: 'タブ + エンター + 追加',
  play: () => {
    TabAndEnter.play();
    userEvent.click(screen.getByText('追加'));
  },
};

export const TabEnterAndCancel = {
  storyName: 'タブ + エンター + キャンセル',
  play: () => {
    TabAndEnter.play();
    userEvent.click(screen.getByText('キャンセル'));
  },
};
