import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project?: Project; // Input to receive project data

  constructor() {}
}
