import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
  { path: '', component: AboutComponent }, // Placeholder for About component
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
