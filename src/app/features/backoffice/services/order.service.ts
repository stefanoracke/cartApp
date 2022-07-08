import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { OrderI } from 'src/app/core/models/order.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders?:Observable<OrderI[]>

  private orderCollection: AngularFirestoreCollection<OrderI>

  constructor(private readonly afs: AngularFirestore) {
    this.orderCollection = afs.collection<OrderI>('orders');
    this.getOrders();
   }

   onDeleteOrders(prodId: string): Promise<void>{
    return new Promise (async(resolve, reject)=>{
      try{
        const result = this.orderCollection.doc(prodId).delete();
        resolve(result);
      }catch(err){
        reject(err)
      }
    })
   }
   onSaveOrders(order: OrderI, prodId:string|null): Promise<void>{
    return new Promise( async (resolve, reject) => {
      try {
        const id = prodId || this.afs.createId();
        const data = { id, ...order};
        Swal.fire({
          title: 'Success transaction!',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Cool'
        })        
        resolve(this.orderCollection.doc(id).set(data))
      } catch (error) {
        
        Swal.fire({
          title: 'Error!',
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Cool'
        })  
        reject(error)
      }
    })
   }
   private getOrders(): void{
    this.orders = this.orderCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as OrderI))
    )
   }
}
