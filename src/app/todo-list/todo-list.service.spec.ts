import { TestBed } from '@angular/core/testing';
import { TodoListService } from './todo-list.service';
import {SpyOnClass} from 'jasmine-core'
import { of } from 'rxjs';

describe('TodoListService', () => {
  let service: TodoListService;
  let todoListService: jasmine.SpyObj<TodoListService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide: TodoListService,
          userFactory: () => SpyOnClass(TodoListService)}
      ]
    });
    service = TestBed.inject(TodoListService);
  });

/*
  it('should be created', () => {

    expect(service).toBeTruthy();

  });

  it('should return values', () => {
    
    todoListService = TestBed.get(TodoListService);
    todoListService.getTodos.and.returnValue(
      of([
        
      ])
    )

  });

*/

});
