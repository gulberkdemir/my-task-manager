import { Component } from '@angular/core';
import {TodosService} from "../services/todos.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  text: string = '';
  constructor(private todoService: TodosService) {
  }

  changeText(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.text = target.value

  }

  addTodo(): void {
    console.log('addToDo', this.text)
    this.todoService.addTodo(this.text);
  }

}
