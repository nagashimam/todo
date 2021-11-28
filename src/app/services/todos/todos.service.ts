import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  async fetchTodos(): Promise<void> {}

  getTodos$(): Observable<string[]> {
    throw new Error('Method not implemented.');
  }
}
