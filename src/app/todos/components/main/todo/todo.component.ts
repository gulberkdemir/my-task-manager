import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoInterface} from "../../types/todo.model";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input() todo?: TodoInterface ;
  @Input() isEditting?: boolean ;
  @Output() setEdittingId = new EventEmitter<string | null>();

  setTodoInEditMode(): void {
    console.log('setTodoInEditMode');
    this.setEdittingId.emit(this.todo?.id);
  }

}
