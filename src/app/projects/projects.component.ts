import { Component, OnInit } from '@angular/core';
import { Project } from '../_models/Project';
import { ProjectService } from '../_services/project.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  projects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.projects$.subscribe(projects => {
  this.projects = projects; // Assign fetched projects to the component's array
});
  }

}
