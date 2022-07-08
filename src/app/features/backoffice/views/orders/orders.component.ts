import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  navigationExtras: NavigationExtras | undefined = {
    state: {
      value: null
    }
  };

  orders$ = this.orderSvc.orders;

  constructor(private router: Router, private orderSvc: OrderService) { }

  
  
  ngOnInit(): void {
  }

  onGoToEdit(item:any): void{
    if(this.navigationExtras != undefined){
      if(this.navigationExtras.state != undefined){
        this.navigationExtras.state.value = item
      }
    }
    this.router.navigate(['admin/orders/edit'], this.navigationExtras)
  }

  

  async onGoToDelete(id:any){
    try{
      await this.orderSvc.onDeleteOrders(id);
      alert('Deleted');
    } catch(err){
      alert(err)
    }

    
  }
}
