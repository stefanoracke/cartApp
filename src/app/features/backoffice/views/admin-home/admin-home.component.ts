import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { OrderI } from 'src/app/core/models/order.interface';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  constructor( private orderSvc:OrderService, public auth:AngularFireAuth) { }
  todayString: string = new Date().toDateString();
  orders$ = this.orderSvc.orders
  orders:OrderI[]|undefined
  money:number = 0
  products = 0
  name = "Sam"

  ngOnInit(): void {
    this.getOrders().then(value=>{
      value?.subscribe(value=>{
        this.orders=value;
        this.money = this.orderSvc.getPriceOrders(this.orders)
        this.products = this.orders.length
      })
    })
  }

  async getOrders(){
    return await this.orderSvc.orders
    
  }

}
