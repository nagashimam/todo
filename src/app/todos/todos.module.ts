import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodoListModule } from '../components/todo-list/todo-list.module';
@NgModule({
  declarations: [TodosComponent],
  exports: [TodosComponent],
  imports: [CommonModule, TodoListModule],
})
export class TodosModule {}
