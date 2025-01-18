import { Component, Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-to-do-list',
  imports: [CommonModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  @Input() taskItem: any;
  @Output() sendidTask = new EventEmitter<number>();
  iscomplete:boolean=false;

  handleDeleteTask(id: number){
    this.sendidTask.emit(id);
  }

  handleCompleteTask(){
    this.iscomplete = true;
  }
}
