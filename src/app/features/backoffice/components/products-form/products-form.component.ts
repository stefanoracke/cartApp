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
  image: any;
  imageURL?: string;
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
      this.image = this.product.image
      this.imageURL = this.product.image
      this.productForm.patchValue(this.product);
    }
  }

  uploadImage(event:any){
    
    let file = event.target.files
    let reader= new FileReader();

    reader.readAsDataURL(file[0]);
    reader.onloadend = () =>{
      console.log(reader.result)
      this.image = reader.result;
    }

    console.log(event.target.files);
  }

  goBack(){
    this.router.navigate(['admin/products'])
  }

  async onSave(){
    
    if (this.productForm.valid){
      const product = this.productForm.value;
      await this.productsS.uploadImage(product.name,this.image).then(urlImagen=>{
        this.imageURL = urlImagen;
      })

      let finalProduct = {
        description: product.description,
        name: product.name,
        price: product.price,
        image: this.imageURL
      }
      console.log(finalProduct)
      const productId = this.product?.id || null;
      this.productsS.onSaveProducts(finalProduct, productId)
      
    }
  }  
}
