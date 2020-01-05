import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectResolver } from './project-resolver.service';
import { HomeComponent } from './page/home.component';
import { ProjectDetailsComponent } from './page/project-details/project-details.component';
import { FrozenFoodComponent } from './page/frozen-food/frozen-food.component';
import { FruitsComponent } from './page/fruits/fruits.component';
import { CleanerComponent } from './page/cleaner/cleaner.component';
import { BakeryComponent } from './page/bakery/bakery.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'projects/:id',
    component: ProjectDetailsComponent,
    resolve: {
      project: ProjectResolver
    }
  },
  {
    path: 'frozen',
    component: FrozenFoodComponent
  },
  {
    path: 'fruit',
    component: FruitsComponent
  },
  {
    path: 'cleaner',
    component: CleanerComponent
  },
  {
    path: 'bakery',
    component: BakeryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
