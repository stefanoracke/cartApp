import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnChanges {

  @Input() loginDisplay: boolean = false;
  @Output() newBooleanEvent = new EventEmitter<boolean>();

  constructor(private authS: AuthService) {
    
   }
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  usuario = {
    email:'',
    password:''
  }

  login(){
    const {email, password} = this.usuario;

    this.authS.login(email, password).then(res =>{
      this.close(this.loginDisplay)
    })
  }

  loginWithGoogle(){
    const {email, password} = this.usuario;

    this.authS.loginGoogle(email, password).then(res =>{
      this.close(this.loginDisplay)
    })
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  close($event:boolean){
    this.loginDisplay=!$event
    this.newBooleanEvent.emit(!$event);
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }
  ngOnInit(): void {
  }

}
