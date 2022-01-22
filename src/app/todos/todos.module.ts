import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodoListModule } from '../components/todo-list/todo-list.module';
import { TodoInputModule } from '../components/todo-input/todo-input.module';
@NgModule({
  declarations: [TodosComponent],
  exports: [TodosComponent],
  imports: [CommonModule, TodoListModule, TodoInputModule],
})
export class TodosModule {}
