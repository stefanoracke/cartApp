import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginModule } from '../views/login/login.module';
import { MaterialModule } from 'src/app/core/utils/material/material.module';



@NgModule({
  declarations: [
    CartComponent,
    HeaderComponent,
    FooterComponent,
    
  ],
  imports: [
    CommonModule,
    LoginModule,
    MaterialModule
  ],
  exports: [
    CartComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
