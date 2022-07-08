import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import Swal from 'sweetalert2'


 
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth:AngularFireAuth, private router:Router) { }

  async register(email: string, password: string){
    try{
      return await this.afauth.createUserWithEmailAndPassword(email, password);
    } catch (err){
      console.log("Error en login: ", err);
      return null;
    }
  }

  async login(email: string, password: string){
    try{
      localStorage.setItem('token', 'tokenemail')
      return await this.afauth.signInWithEmailAndPassword(email, password).then((value)=>{
        if( value.credential?.providerId!=null || value.credential?.providerId!=undefined ){
        localStorage.setItem('token', value.credential?.providerId)}
        else{localStorage.setItem('token', 'tokenemail')}
        Swal.fire({
          title: 'Welcome!',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Cool'
        }) 
      }
      );
      
    } catch (err){
      Swal.fire({
        title: 'Error of login!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      }) 
      localStorage.removeItem('token');
      alert("error")
      return null;
    }
  }

  async loginGoogle(email: string, password: string){
    try{
      localStorage.setItem('token', 'tokengoogle')
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(()=> localStorage.setItem('token', 'Google'));
    } catch (err){
      Swal.fire({
        title: 'Error of login!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      }) 
      localStorage.removeItem('token');
      return null;
    }
  }

  getUserLogged(){
    return this.afauth.authState;
  }

  logout(){
    this.afauth.signOut();
    localStorage.removeItem('order');
    localStorage.removeItem('token');
    this.router.navigate([''])
  }
}
