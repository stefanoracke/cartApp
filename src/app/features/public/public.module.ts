import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './views/home/home.component';
import { PublicRoutingModule } from './public-routing.module';
import { ComponentsModule } from './components/components.module';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { CatalogueComponent } from './views/catalogue/catalogue.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from 'src/app/core/utils/material/material.module';
import { FilterNamePipe } from 'src/app/core/utils/pipes/filter-name.pipe';
import { LoginModule } from './views/login/login.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,    
    RegisterComponent,
    CatalogueComponent,
    FilterNamePipe,

  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ComponentsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    SharedModule
  ],
  exports: [
    LoginComponent,
  ]
})
export class PublicModule { }
