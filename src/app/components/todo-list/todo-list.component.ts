import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  /**
   * todoリストの項目の配列
   */
  @Input() todos: string[] = [];
}
