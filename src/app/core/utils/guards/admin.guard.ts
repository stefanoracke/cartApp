import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';





@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  
  user:any

  constructor(afAuth:AngularFireAuth){
    this.user= afAuth.user
  }

  

  async canActivate(
    
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  Promise<boolean | UrlTree>  {
    
    
    const isAuthenticated = await this.user ? true : false;
    
    if(isAuthenticated){
      alert(isAuthenticated)
    }

    return isAuthenticated
  }
  
}
