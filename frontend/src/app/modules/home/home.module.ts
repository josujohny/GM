import { NgModule } from '@angular/core';

import { MyModalComponent } from './modal/my-modal.component';

import { HomeComponent } from './page/home.component';
import { HomeRoutingModule } from './home.routing';

import { SharedModule } from '@shared/shared.module';
import { ProjectItemComponent } from './page/project-item/project-item.component';
import { ProjectDetailsComponent } from './page/project-details/project-details.component';
import { FrozenFoodComponent } from './page/frozen-food/frozen-food.component';
import { FruitsComponent } from './page/fruits/fruits.component';
import { CleanerComponent } from './page/cleaner/cleaner.component';
import { BakeryComponent } from './page/bakery/bakery.component';

@NgModule({
  declarations: [
    HomeComponent,
    MyModalComponent,
    ProjectItemComponent,
    ProjectDetailsComponent,
    FrozenFoodComponent,
    FruitsComponent,
    CleanerComponent,
    BakeryComponent
  ],
  imports: [SharedModule, HomeRoutingModule],
  exports: [],
  providers: [],
  entryComponents: [MyModalComponent]
})
export class HomeModule {}
