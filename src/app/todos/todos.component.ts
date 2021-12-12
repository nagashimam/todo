import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  typing = false;
  todos: string[] | null = null;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService.getTodos$().subscribe((todos) => (this.todos = todos));
  }

  addTodo(todo: string) {
    console.log('todo', todo);
    this.typing = false;
    this.todosService.addTodo(todo);
  }
}
