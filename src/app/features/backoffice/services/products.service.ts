import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ProductI } from 'src/app/core/models/product.interface';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { AngularFireStorage } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products?: Observable<ProductI[]>;

  private productsCollection: AngularFirestoreCollection<ProductI>;
  

  constructor(private readonly afs: AngularFirestore, private storage:AngularFireStorage) {
    this.productsCollection = afs.collection<ProductI>('products');
    this.getProducts();
   }

   onDeleteProducts(prodId: string): Promise<void>{
    return new Promise (async(resolve, reject)=>{
      try{
        const result = this.productsCollection.doc(prodId).delete();

        Swal.fire({
          title: 'Deleted Succesfull!',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Cool'
        }) 
        
        resolve(result);
      }catch(err){
        Swal.fire({
          title: 'Deleted Error!',
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Cool'
        }) 
        reject(err)
      }
    })
   }
   onSaveProducts(product: ProductI, prodId:string): Promise<void>{
    return new Promise( async (resolve, reject) => {
      try {
        const id = prodId || this.afs.createId();
        const data = { id, ...product};

        Swal.fire({
          title: 'Product Saved!',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Cool'
        }) 
                
        resolve(this.productsCollection.doc(id).set(data))
      } catch (error) {
        Swal.fire({
          title: 'Product Error!',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Cool'
        }) 
        reject(error)
      }
    })
   }
   private getProducts(): void{
    this.products = this.productsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as ProductI))
    )
   }

   async uploadImage(nombre: string, imgBase64: any){
    try{
      let ref = await this.storage.ref(nombre);
      const res = ref.putString(imgBase64, 'data_url');
      return (await res).ref.getDownloadURL();

    }
    catch(err){
      console.log(err);
      return null
    }
   }
   
}
