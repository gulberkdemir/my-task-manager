import {Component, Input} from '@angular/core';
import {TodoInterface} from "../../types/todo.model";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input() todo?: TodoInterface ;

}
