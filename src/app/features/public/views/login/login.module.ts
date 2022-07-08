import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { MaterialModule } from 'src/app/core/utils/material/material.module';

@NgModule({
    declarations: [
      LoginComponent,      
    ],
    imports: [
      CommonModule,
      MaterialModule,
      FormsModule,
      ReactiveFormsModule,
    ],
    exports: [
      LoginComponent,
    ]
  })

  export class LoginModule {}