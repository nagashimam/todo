import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoInputComponent } from './todo-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoInputComponent],
  exports: [TodoInputComponent],
  imports: [CommonModule, FormsModule],
})
export class TodoInputModule {}
