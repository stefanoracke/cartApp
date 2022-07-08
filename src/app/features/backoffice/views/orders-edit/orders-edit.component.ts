import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderI } from 'src/app/core/models/order.interface';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-orders-edit',
  templateUrl: './orders-edit.component.html',
  styleUrls: ['./orders-edit.component.scss']
})
export class OrdersEditComponent implements OnInit {
  order!: OrderI;
  productForm: FormGroup = this.fb.group({
    status: ['',[Validators.required]],
    
  });

  status = ''

  public title = 'Edition of Orders'

  constructor(private router: Router, private fb: FormBuilder, private orderSvc: OrderService) {
    const navigation = this.router.getCurrentNavigation();
    this.order = navigation?.extras?.state?.value;
    this.productForm
   }

  ngOnInit(): void {
    if(typeof this.order === 'undefined'){
      this.router.navigate(['admin/orders'])
      this.title = 'New product'
    }else{
      this.productForm.patchValue(this.order);
    }
  }

  statusSelector(status:string){
    this.status = status
  }

  goBack(){
    this.router.navigate(['admin/orders'])
  }

  onSave(){
    
    if (this.productForm.valid){
      const order:OrderI = {
        id: this.order.id,
        status: this.status,
        cart_products: this.order.cart_products,
        total_price: this.order.total_price
      };
      const orderId = this.order?.id || null;
      this.orderSvc.onSaveOrders(order, orderId)
      
    }
  }  
}
