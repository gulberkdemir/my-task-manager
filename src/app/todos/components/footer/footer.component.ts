import {Component} from '@angular/core';
import {TodosService} from "../services/todos.service";
import {map, Observable} from "rxjs";
import {FilterEnum} from "../types/application.contants";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  noTodosClass$: Observable<boolean>;
  activeCount$: Observable<number>;
  itemLeftText$: Observable<string>;
  filter$: Observable<FilterEnum>;

  filterEnum: typeof FilterEnum = FilterEnum;

  constructor(private todoService: TodosService){
    this.activeCount$ = this.todoService.todos$.pipe(
      map((todos => todos.filter(todo => !todo.isCompleted).length))
    );
    this.itemLeftText$ = this.activeCount$.pipe(
      map((activeCount) => `item${activeCount !== 1 ? 's' : ''} left`)
    )

    this.noTodosClass$ = this.todoService.todos$.pipe(map(
      (todo) => todo.length === 0
    ))
    this.filter$ = this.todoService.filter$
  }

  changeFilter(event: Event, filterName: FilterEnum): void {
    console.log(filterName);
    event.preventDefault();
    this.todoService.changeFilter(filterName)
  }

}
