import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  async fetchTodos(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  getTodos$(): Observable<string[]> {
    throw new Error('Method not implemented.');
  }

  async addTodo(todo: string): Promise<void> {
    new Error('Method not implemented.' + todo);
  }
}
