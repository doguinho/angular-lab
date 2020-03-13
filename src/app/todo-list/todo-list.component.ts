import { Component, OnInit } from '@angular/core';
import { TodoListService, Todo } from './todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  private loadedTodos:Todo[]

  constructor(private todoService:TodoListService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(
      todos => {
        this.loadedTodos = todos
      }
    )
  }

}
