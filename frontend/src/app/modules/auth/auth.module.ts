import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { SharedModule } from '@shared/shared.module';
import { MainPageComponent } from './page/main-page/main-page.component';

import { AuthRoutingModule } from './auth.routing';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@shared/material.module';






@NgModule({
  declarations: [LoginComponent, RegisterComponent, MainPageComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule, CarouselModule.forRoot(), FormsModule, ReactiveFormsModule, MaterialModule],
  entryComponents: [],
  bootstrap: [MainPageComponent]
})
export class AuthModule {}
