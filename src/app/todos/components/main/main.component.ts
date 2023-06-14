import { Component } from '@angular/core';
import {combineLatest, map, Observable} from "rxjs";
import {TodoInterface} from "../types/todo.model";
import {TodosService} from "../services/todos.service";
import {FilterEnum} from "../types/application.contants";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  visibleTodos$: Observable<TodoInterface[]>;
  noTodoClass$: Observable<boolean>;
  isAllTodosSelected$: Observable<boolean>;
  constructor(private todoService: TodosService) {
    this.isAllTodosSelected$ = this.todoService.todos$.pipe(map((todos) =>
      todos.every((todo) => todo.isCompleted)));
    this.noTodoClass$ = this.todoService.todos$.pipe(map(
      (todo) => todo.length === 0
    ))

    this.visibleTodos$ = combineLatest(this.todoService.todos$, this.todoService.filter$).pipe(
      map(([todos, filter]: [ TodoInterface[], FilterEnum ]) => {
        if(filter === FilterEnum.all) {
          return todos.filter(todo => !todo.isCompleted);
        }else if(filter === FilterEnum.completed){
          return todos.filter(todo => todo.isCompleted);
        }
        return todos;
      })
    );

  }

  toggleAllTodos(event: Event){
    const target = event.target as HTMLInputElement;
    this.todoService.toggleAll(target.checked);

  }

}
