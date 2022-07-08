import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  

  constructor( private router:Router, public authS:AuthService) {
    
   }
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  usuario = {
    email:'',
    password:''
  }

  password2 = ''

  redirectTo(){
    this.router.navigate([''])
  }

  registrar(){
    const {email, password} = this.usuario;

    this.authS.register(email, password).then(res =>{
      alert("Registrado")
    })
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  
  ngOnInit(): void {
  }

}
