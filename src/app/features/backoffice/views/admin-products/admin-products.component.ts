import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ProductI } from 'src/app/core/models/product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
  navigationExtras: NavigationExtras | undefined = {
    state: {
      value: null
    }
  };

  products$ = this.productSvc.products;

  constructor(private router: Router, private productSvc: ProductsService) { }

  
  navigateToNew(){
    
    this.router.navigate(['admin/products/new']);
  }
  ngOnInit(): void {
  }

  onGoToEdit(item:any): void{
    if(this.navigationExtras != undefined){
      if(this.navigationExtras.state != undefined){
        this.navigationExtras.state.value = item
      }
    }
    this.router.navigate(['admin/products/edit'], this.navigationExtras)
  }

  

  async onGoToDelete(id:any){
    try{
      await this.productSvc.onDeleteProducts(id);
      alert('Deleted');
    } catch(err){
      alert(err)
    }

    
  }

}
