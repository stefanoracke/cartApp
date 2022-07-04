import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './views/home/home.component';
import { PublicRoutingModule } from './public-routing.module';
import { ComponentsModule } from './components/components.module';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { CatalogueComponent } from './views/catalogue/catalogue.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CatalogueComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ComponentsModule
  ],
  exports: [
  ]
})
export class PublicModule { }
