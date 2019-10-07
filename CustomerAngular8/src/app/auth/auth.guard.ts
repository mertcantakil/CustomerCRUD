import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private router:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,       /*Eğer giris yapılmadan /CustomerDetails'a gidilmeye çalışılırsa engellemek için. */
    state: RouterStateSnapshot):  boolean {
      if(localStorage.getItem('token')!=null){
        return true;
      }
      else{
        this.router.navigateByUrl('user/login');
        return false;
      }
    
  }
  
}
