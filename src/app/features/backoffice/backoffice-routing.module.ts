import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './views/admin-home/admin-home.component';
import { AdminProductsComponent } from './views/admin-products/admin-products.component';
import { EditproductComponent } from './views/editproduct/editproduct.component';
import { NewproductComponent } from './views/newproduct/newproduct.component';
import { OrdersEditComponent } from './views/orders-edit/orders-edit.component';
import { OrdersComponent } from './views/orders/orders.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path:"",
        component: AdminHomeComponent
      },
      {
        path:"products",
        component: AdminProductsComponent
      },
      {
        path: "products/edit",
        component: EditproductComponent
      },
      {
        path: "products/new",
        component: NewproductComponent
      },
      {
        path: "orders",
        component: OrdersComponent
      },
      {
        path: "orders/edit",
        component: OrdersEditComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
