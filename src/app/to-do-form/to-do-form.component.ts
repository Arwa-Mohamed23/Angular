import { Component, EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-form',
  imports: [FormsModule],
  templateUrl: './to-do-form.component.html',
  styleUrl: './to-do-form.component.css'
})
export class ToDoFormComponent {
  @Output() sendTask = new EventEmitter<string>();

  onSubmit(value: string) {
    this.sendTask.emit(value);
  }
}
