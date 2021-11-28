import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodosService } from '../services/todos/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  typing = false;
  todos$: Observable<string[]> | null = null;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todos$ = this.todosService.getTodos$();
  }

  addTodo(todo: string) {
    this.typing = false;
    this.todosService.addTodo(todo);
  }
}
