import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CartProductI, OrderI } from 'src/app/core/models/order.interface';
import { ProductI } from 'src/app/core/models/product.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private order!: OrderI;
  path = 'cart/';
  private inCaseOfNull: OrderI = {
    status: 'pending',
    cart_products: [ ],
    total_price: '0'
  }
  private orderonDelete!: OrderI

  constructor(public fstoreSvc:AngularFirestore) { }

  addToCart(product:ProductI,newOrder:OrderI){
    
      if(newOrder == undefined){
        newOrder = this.inCaseOfNull
      }
    
      const item = newOrder.cart_products.find(productC => {
      return (productC.prod_id === product.id)})
    
  

    if(item !== undefined){
      item.quantity ++;
      let total:number = parseInt(newOrder.total_price)
      let price = parseInt(product.price)
      total += price;
      let realTotal = total.toString()
      newOrder.total_price = realTotal
    }else{
      const add: CartProductI = {
        prod_id: product.id,
        quantity: 1,
        prod_name: product.name,
        price: product.price
      }
      
      let total:number = parseInt(newOrder.total_price)
      let price = parseInt(product.price)
      total += price;
      let realTotal = total.toString()
      newOrder.total_price = realTotal

      newOrder.cart_products.push(add);
    }
    console.log('en add pedido ->', newOrder)
    return newOrder
  }

 
  changeNumberCart(order:OrderI){
    if(order==undefined){
      return 0
    }
    else{
    const n = order?.cart_products.map(item => item.quantity).reduce((prev, curr)=> prev+curr , 0);
    return n;
    }
  }
  
  getCart():OrderI{
    return this.order = JSON.parse(localStorage.getItem('order')!)
  
  }

  saveCart(order:OrderI){
    localStorage.setItem("order", JSON.stringify(order));
    
  };

  addQuantity(product: CartProductI){
    this.getCart();
    let item = this.order.cart_products.find((item) => (item.prod_id === product.prod_id)
      
    )
    if(item != undefined){
      item.quantity++
    }
    
    let total:number = parseInt(this.order.total_price)
    let price = parseInt(product.price)
    total += price;
    let realTotal = total.toString()
    this.order.total_price = realTotal
    this.saveCart(this.order)
    console.log(this.order)
    return this.order
  }

  inCart(product:ProductI):boolean{
    this.order = this.getCart()
    let item = this.order?.cart_products.find((item) => (item.prod_id === product.id))
    console.log(item==undefined)
    return item==undefined
  }

  substQuantity(product: CartProductI){
    this.getCart();
    let item = this.order.cart_products.find((item) => (item.prod_id === product.prod_id)
      
    )
    if(item != undefined){
      if(item.quantity>1){
        item.quantity--;
      }else{
        console.log(item.quantity)
        this.order = this.deleteElementCart(product)
        return this.order;
      }
    }
    
    let total:number = parseInt(this.order.total_price)
    let price = parseInt(product.price)
    total -= price;
    let realTotal = total.toString()
    this.order.total_price = realTotal
    console.log(this.order)
    this.saveCart(this.order)
    return this.order
  }

  deleteElementCart(product:CartProductI){
    this.getCart();
    let newProducts = this.order.cart_products.filter(item=> item.prod_id != product.prod_id)
    console.log(product)
    console.log(newProducts)
    let priceNum = parseInt(product.price)
    let quantity = product.quantity
    let beforeTotal = parseInt(this.order.total_price)
    let newTotal = beforeTotal - (priceNum * quantity)
    let realTotal = newTotal.toString()

    this.orderonDelete = {
      status: this.order.status,
      cart_products: newProducts,
      total_price : realTotal
    }

    this.saveCart(this.orderonDelete)

    console.log(this.orderonDelete)

    return this.orderonDelete
  }

}
