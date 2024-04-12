import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectsSubject = new BehaviorSubject<Project[]>([]);
  projects$: Observable<Project[]> = this.projectsSubject.asObservable();

  constructor() {
    this.setProjects([
      {id: 0, tags: [Tag.ANGULAR, Tag.NODEJS], name: "Portfolio Angular App", picture: "../assets/portfolio.jpg", projectLink: "https://github.com/deehstar/Portfolio-Website", summary: "Fullstack web app developed using Angular and Node.JS", description: "Welcome to our portfolio web application! Here, you'll find a showcase of our projects, experiences, and expertise all in one place. Whether you're a potential client, employer, or simply curious, our portfolio offers a glimpse into our capabilities and accomplishments. Explore our curated collection of work samples, testimonials, and achievements to get a comprehensive understanding of what we have to offer. From web development and design to graphic design and marketing campaigns, our portfolio reflects our dedication to excellence and innovation. Stay tuned as we continue to update and expand our portfolio with exciting new projects and successes."},
      {id: 1, tags: [Tag.JAVA], name: "Skipper Skrald", picture: "../assets/skipper_skrald.png", projectLink: "//www.github.com", summary: "A game designed to teach you about UN Sustainable Development Goal 14.1", description: "Skipper Skrald is an educational game developed as part of our 1st semester project at the University of Southern Denmark, Faculty of Engineering. The aim of the educational game is to disseminate knowledge about UN Sustainable Development Goal 14.1, which focuses on the conservation and sustainable use of the world's oceans. The game features a world, endgame, and allows the user to collect and recycle plastic waste. The game is developed in Java and with JavaFX over two iterations. The educational game is developed based on the object-oriented paradigm and Engineering Classic Principle, which involves the development of a prototype, followed by testing and iteration based on feedback."},
      {id: 2, tags: [Tag.JAVA], name: "Product Management System", picture: "../assets/pim.png", projectLink: "//www.github.com", summary: "An efficient tool designed to streamline product management processes.", description: "The Product Management System was developed during our 2nd semester. A software solution developed to enhance the efficiency of product management processes. Whether you're a small startup or a large corporation, this system provides a centralized platform for managing all aspects of product lifecycles, from ideation to retirement."},
      {id: 3, tags: [Tag.NODEJS, Tag.JAVASPRING, Tag.JAVASCRIPT], name: "Beer Brewing Machine", picture: "../assets/beer_brewing_machine.jpg" ,projectLink: "https://github.com/BeerBrewersSem3/SEMPRO3", summary: "A simulation of a cyper physical beer brewing machine", description: "Coming..."},
      {id: 4, tags: [Tag.NODEJS, Tag.JAVASPRING, Tag.ANGULAR], name: "Drone Dudes", picture: "../assets/beer_brewing_machine.jpg" ,projectLink: "https://github.com/DroneDudes/SEMPRO4", summary: "Component based cyper-physical system", description: "4th semester"}
    ])
   }

  setProjects(projects: Project[]) {
    this.projectsSubject.next(projects);  
  }

  getProjectById(id: number): Observable<Project | undefined> {
    return this.projects$.pipe(
      map(projects => projects.find(project => project.id === id))
    );
  }
}
