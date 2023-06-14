import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  text: string = '';

  changeText(event: Event): void {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
    this.text = target.value

  }

  addTask(): void {
    console.log('addToDo', this.text)
  }

}
