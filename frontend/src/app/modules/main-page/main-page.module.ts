import { NgModule } from '@angular/core';

 

import { SharedModule } from '@shared/shared.module';

 

import { MainPageRoutingModule } from '@modules/main-page/main-page.routing';

import { MainPageComponent } from './page/main-page/main-page.component';


 

@NgModule({

  declarations: [MainPageComponent],

  imports: [

    MainPageRoutingModule,

 

    SharedModule

  ]

})

export class MainPageModule { }

 