import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  projects = [
    { title: 'Project 1', description: 'Description 1', link: '#' },
    { title: 'Project 2', description: 'Description 2', link: '#' },
    { title: 'Project 3', description: 'Description 3', link: '#' },
  ];
}
