import { NgModule } from '@angular/core';

import { MyModalComponent } from './modal/my-modal.component';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';

import { SharedModule } from '@shared/shared.module';
import { ProjectItemComponent } from './page/project-item/project-item.component';

@NgModule({
  declarations: [HomeComponent, MyModalComponent, ProjectItemComponent],
  imports: [SharedModule, HomeRoutingModule],
  exports: [],
  providers: [],
  entryComponents: [MyModalComponent]
})
export class HomeModule {}
