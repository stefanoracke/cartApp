import { Component, OnInit,OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';
import { OrderI } from 'src/app/core/models/order.interface';
import { LoginI } from 'src/app/core/models/login.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges, OnInit {
  
  cart!: OrderI;
  logged!: boolean
  public numberCart = 0;
  order!: OrderI;
  display = false;
  loginDisplay = false
  constructor(private router:Router, private authS:AuthService, private cartSvc:CartService) { 
    
    this.order = this.cartSvc.getCart()
    this.order = this.getCart()
    this.cart = this.getCart()
    this.numberCart = this.cartSvc.changeNumberCart(this.order)
  }

  ngOnInit(): void {
    this.logged = this.isLogged()
    console.log(this.logged)
    
  }

  ngOnChanges(changes: SimpleChanges) {
    this.order = this.getCart()
    this.cart = this.getCart()
    // this.number = this.cart.length
    // changes.cart
    // changes.number
    changes.cart
    changes.order
    changes.logged
  }

   isLogged(){
    
    return true;
  }

  

  logOut(){
    this.authS.logout();
  }

  abrirLogin(){
    this.loginDisplay = !this.loginDisplay;
    this.cart = this.getCart()
    this.order = this.getCart()
  }

  changeNumber($event:number){
    this.numberCart = $event;
  }

  abrirCart(){
    this.display = !this.display;
    this.order = this.getCart();
    this.numberCart = this.cartSvc.changeNumberCart(this.order)
    
  }

  getCart():OrderI{
    return this.order = JSON.parse(localStorage.getItem('order')!)
  
  }

  changeCartValue(order:OrderI){
    order = this.getCart()
  }

  changeValueLogin(boolean:boolean){
    this.loginDisplay = boolean
  }

  changeValue(boolean:boolean,cart:OrderI){
    this.display = boolean
    this.order = this.getCart()
  }



  redirectToDashboard(){
    this.router.navigate(['admin'])
  }
}
