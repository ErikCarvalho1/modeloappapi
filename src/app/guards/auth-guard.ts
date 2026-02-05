import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { Auth } from './../services/auth';
import { Injectable } from "@angular/core";




@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate{
  constructor(
    private auth: Auth, 
    private router: Router
  ){}

  canActivate():boolean{
  if(this.auth.isLogado()){
    return true;
  }
  this.router.navigateByUrl('/login');
  return false;
  }

}