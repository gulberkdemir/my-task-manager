import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './components/todos/todos.component';
import {RouterModule, Routes} from "@angular/router";
import { HeaderComponent } from './components/header/header.component';
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
];

@NgModule({
  declarations: [
    TodosComponent,
    HeaderComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule, MatIconModule, MatButtonModule],
})
export class TodosModule { }
