import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root' // Provide service globally (adjust if needed)
})
export class ProjectService {

  private projects: Project[] = [
    // Define your project data here
    {
      id: 1,
      name: 'Project 1',
      summary: 'A brief summary of Project 1',
      description: 'Detailed description of Project 1',
      projectLink: 'https://your-project-link.com',
      pictures: ['assets/images/project1-picture1.jpg', 'assets/images/project1-picture2.jpg'],
      tags: [Tag.ANGULAR, Tag.JAVA]
    },
    // ... Add more projects
  ];

  getProjects(): Project[] {
    return this.projects.slice(); // Return a copy to avoid mutation
  }

  // Add other methods for fetching projects from server (if applicable)
}