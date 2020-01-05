import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectResolver } from './project-resolver.service';
import { HomeComponent } from './home.component';
import { ProjectItemComponent } from './page/project-item/project-item.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'project-list',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'project-list',
        component: ProjectItemComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
