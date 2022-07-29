import { Component, OnInit,OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';
import { OrderI } from 'src/app/core/models/order.interface';
import { AngularFireAuth  } from '@angular/fire/auth';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges, OnInit {
  event: any;
  cart!: OrderI;
  logged!: boolean
  @Input() numberCart = 0;
  // @Output() numberCartEmmiter = new EventEmitter<number>()
  order!: OrderI;
  display = false;
  loginDisplay = false
   constructor(private router:Router, private authS:AuthService, private cartSvc:CartService, public auth:AngularFireAuth) { 
    
    this.order = this.cartSvc.getCart()
    this.order = this.getCart()
    this.cart = this.getCart()
    this.numberCart = this.cartSvc.changeNumberCart(this.order)
    
  }

   async ngOnInit(): Promise<void> {
    await this.isLogged();
    
    return this.isLogged()
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

  // changeCartNumber(number:number){

  //   this.numberCartEmmiter.emit(number)
  // }

  async isLogged(){
    
    await this.auth.user.subscribe(event => this.event = event?.email) ;
    const isAuthenticated = this.event ? true : false;
    console.log(isAuthenticated)
  }

  logOut(){
    this.authS.logout();
  }

  abrirLogin(){
    this.loginDisplay = !this.loginDisplay;
    this.cart = this.getCart()
    this.order = this.getCart()
    console.log(this.isLogged())
  }

  changeNumber($event:number){
    this.numberCart = $event;
  }

  abrirCart(){
    this.display = !this.display;
    this.order = this.getCart();
    this.numberCart = this.cartSvc.changeNumberCart(this.order)
    this.isLogged()
  }

  getCart():OrderI{
    return this.order = JSON.parse(localStorage.getItem('order')!)
  
  }

  changeCartValue(order:OrderI){
    order = this.getCart()
  }

  changeNumberValue(number:number){
    
    this.numberCart= number
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
