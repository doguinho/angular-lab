import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from './todo-list/todo-list.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = [
      { id: 1, title: 'Comprar Leite' },
      { id: 2, title: 'Varrer a sala' },
      { id: 3, title: 'Dar banho no cachorro' },
      { id: 4, title: 'Jogar o lixo fora' }
    ];
    return {todos};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the todos array is empty,
  // the method below returns the initial number (11).
  // if the todos array is not empty, the method below returns the highest
  // hero id + 1.
  genId(todos: Todo[]): number {
    return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
  }
}