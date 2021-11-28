import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoInputComponent {
  typing: boolean = false;

  startTyping() {
    this.typing = true;
  }

  add() {
    this.typing = false;
  }

  cancel() {
    this.typing = false;
  }
}
