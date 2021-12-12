import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoInputComponent implements AfterViewChecked {
  @Input() typing = false;
  @Output() typingStarted = new EventEmitter<void>();
  @Output() added = new EventEmitter<string>();
  @Output() canceled = new EventEmitter<void>();
  @ViewChild('label') labelRef?: ElementRef;
  todo = '';

  ngAfterViewChecked(): void {
    if (this.labelRef) {
      this.labelRef.nativeElement.focus();
    }
  }

  startTyping() {
    this.typingStarted.emit();
  }

  add() {
    if (this.todo) {
      console.log('todo', this.todo);
      this.added.emit(this.todo);
    } else {
      this.cancel();
    }
  }

  cancel() {
    this.canceled.emit();
  }
}
