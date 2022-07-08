import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {
  product: any;
  productForm: FormGroup = this.fb.group({
    name: ['',[Validators.required]],
    price: ['',[Validators.required]],
    description: ['',[Validators.required]]
  });

  public title = 'Edition of products'

  constructor(private router: Router, private fb: FormBuilder, private productsS: ProductsService) {
    const navigation = this.router.getCurrentNavigation();
    this.product = navigation?.extras?.state?.value;
    this.productForm
   }

  ngOnInit(): void {
    if(typeof this.product === 'undefined'){
      this.router.navigate(['admin/products/new'])
      this.title = 'New product'
    }else{
      this.productForm.patchValue(this.product);
    }
  }

  goBack(){
    this.router.navigate(['admin/products'])
  }

  onSave(){
    console.log(this.productForm.valid)
    if (this.productForm.valid){
      const product = this.productForm.value;
      const productId = this.product?.id || null;
      this.productsS.onSaveProducts(product, productId)
      
    }
  }  
}
