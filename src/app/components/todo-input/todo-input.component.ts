import {
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
export class TodoInputComponent {
  @Input() typing = false;
  @Output() typingStarted = new EventEmitter<void>();
  @Output() added = new EventEmitter<string>();
  @Output() canceled = new EventEmitter<void>();
  @ViewChild('textArea') textAreaRef: ElementRef | null = null;

  startTyping() {
    this.typingStarted.emit();
  }

  add() {
    if (this.textAreaRef) {
      const value = this.textAreaRef.nativeElement.value;
      this.added.emit(value);
    } else {
      this.cancel();
    }
  }

  cancel() {
    this.canceled.emit();
  }
}
