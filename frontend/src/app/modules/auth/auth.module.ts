import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { SharedModule } from '@shared/shared.module';
import { MainPageComponent } from './page/main-page/main-page.component';

import { AuthRoutingModule } from './auth.routing';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, MainPageComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule]
})
export class AuthModule {}
