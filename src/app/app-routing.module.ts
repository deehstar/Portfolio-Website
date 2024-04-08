import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Placeholder for About component
  { path: 'about', component: AboutComponent }, // Future About component
  { path: 'experience', component: ExperienceComponent }, // Future Experience component
  { path: 'projects', component: ProjectsComponent }, // Future Projects component
  { path: 'contact', component: ContactComponent }, // Future Contact component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
