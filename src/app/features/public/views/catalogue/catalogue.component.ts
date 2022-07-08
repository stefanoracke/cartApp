import { Component, OnInit } from '@angular/core';
import { OrderI } from 'src/app/core/models/order.interface';
import { ProductI } from 'src/app/core/models/product.interface';
import { ProductsService } from 'src/app/features/backoffice/services/products.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {


  display = false;
  currentOrder!:OrderI
  products$ = this.productSvc.products
  filterByName = "";
  element!:ProductI
  products!:ProductI[]
  newOrder: OrderI = {
    status: 'pending',
    cart_products: [ ],
    total_price: '0'
  }

  constructor(private productSvc:ProductsService, private cartSvc: CartService) { }

  ngOnInit(): void {
    this.newOrder = this.getCart()
    
  }

  saveCart(order:OrderI){
    localStorage.setItem("order", JSON.stringify(order));
    
  };

  changeValue($event:boolean){
    
    return !$event
  }

  addToCart(product:ProductI,order:OrderI){
    order = this.getCart()
    
    this.currentOrder = this.getCart()
    this.saveCart(this.cartSvc.addToCart(product,order))
    this.getCart()
    this.currentOrder = this.getCart()
  }

  inCart(product:ProductI){
    return this.cartSvc.inCart(product)
  }

  getCart():OrderI{
    return this.currentOrder = JSON.parse(localStorage.getItem('order')!)

  }


}
