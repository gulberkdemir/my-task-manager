import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output, Renderer2,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {TodoInterface} from "../../types/todo.model";
import {TodosService} from "../../services/todos.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnChanges{
  @Input() todo?: TodoInterface ;
  @Input() isEditting?: boolean ;
  @Output() setEdittingId = new EventEmitter<string | null>();

  editingText? = '';

  @ViewChild('textInput') textInput?: ElementRef;

  constructor(private todoService: TodosService, private renderer: Renderer2) {

  }

  ngOnChanges(changes: SimpleChanges) {

    console.log('changes', changes);
    if (changes['isEditting'].currentValue) {
      setTimeout(() => {
        this.textInput?.nativeElement.focus();
      }, 0);
    }

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
