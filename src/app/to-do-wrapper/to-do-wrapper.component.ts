import { Component } from '@angular/core';
import {ToDoFormComponent} from '../to-do-form/to-do-form.component';
import {ToDoListComponent} from '../to-do-list/to-do-list.component';

@Component({
  selector: 'app-to-do-wrapper',
  imports: [ToDoFormComponent, ToDoListComponent],
  templateUrl: './to-do-wrapper.component.html',
  styleUrl: './to-do-wrapper.component.css'
})
export class ToDoWrapperComponent {
  tasks: string[]= [];

  receiveTask(value: string){
    this.tasks.push(value);
  }

  deleteTask(id: number){
    this.tasks = this.tasks.filter((elem, i) => i !== id);
  }
}
