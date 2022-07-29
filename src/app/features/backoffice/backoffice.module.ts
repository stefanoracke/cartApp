import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { AdminProductsComponent } from './views/admin-products/admin-products.component';
import { AdminHomeComponent } from './views/admin-home/admin-home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NewproductComponent } from './views/newproduct/newproduct.component';
import { EditproductComponent } from './views/editproduct/editproduct.component';
import { OrdersComponent } from './views/orders/orders.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from 'src/app/core/utils/material/material.module';
import { ProductsFormComponent } from './components/products-form/products-form.component';
import { OrdersEditComponent } from './views/orders-edit/orders-edit.component';
import { IdfilterPipe } from 'src/app/core/utils/pipes/idfilter.pipe';

@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminHomeComponent,
    SidebarComponent,
    NewproductComponent,
    EditproductComponent,
    OrdersComponent,
    ProductsFormComponent,
    OrdersEditComponent,
    IdfilterPipe
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    
  ]
})
export class BackofficeModule { }
