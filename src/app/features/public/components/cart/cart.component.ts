import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CartProductI, OrderI } from 'src/app/core/models/order.interface';
import { ProductI } from 'src/app/core/models/product.interface';
import { CartService } from '../../services/cart.service';
import Swal from 'sweetalert2'
import { OrderService } from 'src/app/features/backoffice/services/order.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnChanges {

  
  totalPrice= 0;
  @Output() newCartNumberEvent = new EventEmitter<number>();
  @Input() display: boolean = false;
  @Output() newBooleanEvent = new EventEmitter<boolean>();
  @Input() order!:OrderI;
  @Output() newCartEvent = new EventEmitter<OrderI>();

  constructor(private cartSvc:CartService, private route:Router, private orderSvc: OrderService) {
      this.getCart();
   }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    changes.display
    changes.cart
    changes.totalPrice
    changes.order
}

close($event:boolean,cart:OrderI){
  this.display=!$event
  cart = this.getCart()
  let number = this.cartSvc.changeNumberCart(cart)
  this.newCartNumberEvent.emit(number)
  this.newCartEvent.emit(this.order);
  this.newBooleanEvent.emit(!$event);
  
}



buy(){
  this.order = this.getCart()
  const newOrder = this.order;
  
  this.orderSvc.onSaveOrders(newOrder, null)
  
  this.clearCart();
  this.route.navigate([])
}

saveCart(order:OrderI){
  localStorage.setItem("order", JSON.stringify(order));
  
};

addToCart(product:ProductI,order:OrderI){
  this.getCart();
  this.cartSvc.inCart(product)
  this.saveCart(this.cartSvc.addToCart(product,order))
  this.getCart();
  this.newCartEvent.emit(this.getCart())
}

getCart():OrderI{
  return this.order = JSON.parse(localStorage.getItem('order')!)

}


 clearCart(){
   localStorage.removeItem('order');
   this.order = this.getCart();  
 }

 substQuantity(element:CartProductI){
  this.order = this.cartSvc.substQuantity(element)
 }

 addQuantity(element:CartProductI){
    this.order = this.cartSvc.addQuantity(element)
 }

 deleteCartElement(product:CartProductI){
  this.cartSvc.deleteElementCart(product)
  this.order = this.cartSvc.getCart();
 }

}
