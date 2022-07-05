import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { AdminProductsComponent } from './views/admin-products/admin-products.component';
import { AdminHomeComponent } from './views/admin-home/admin-home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminHomeComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule
  ]
})
export class BackofficeModule { }
