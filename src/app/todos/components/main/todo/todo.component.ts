import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoInterface} from "../../types/todo.model";
import {TodosService} from "../../services/todos.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit{
  @Input() todo?: TodoInterface ;
  @Input() isEditting?: boolean ;
  @Output() setEdittingId = new EventEmitter<string | null>();

  editingText? = '';

  constructor(private todoService: TodosService) {

  }

  ngOnInit(): void{
    this.editingText =this.todo?.text;
  }

  setTodoInEditMode(): void {
    console.log('setTodoInEditMode');
    this.setEdittingId.emit(this.todo?.id);
  }

  removeTodo(): void{
    this.todoService.removeTodo(this.todo?.id!);

  }

  toggleTodo(): void{
    console.log('togletodo')
    this.todoService.toggleTodo(this.todo?.id!);

  }

  changeText(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.editingText = value;
    console.log('changeText', this.editingText);

  }
  changeTodo(): void {
    console.log('change todo', this.editingText);
    this.todoService.changeTodo(this.todo?.id!, this.editingText!);
    this.setEdittingId.emit(null);

  }

}
