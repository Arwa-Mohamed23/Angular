import { Component,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-search',
  imports: [FormsModule],
  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.css'
})
export class UserSearchComponent {
  @Output() sendEmail = new EventEmitter<string>();

  onSubmit(value: string) {
    this.sendEmail.emit(value);
  }
}
