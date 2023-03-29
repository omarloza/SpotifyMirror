import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor(private cookieServices: CookieService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    return this.checkCookieSession();
  }

  checkCookieSession(): boolean {
    try {

      const token = this.cookieServices.check('token');
      //console.log('ok ok ', token)
      if(token){
        return true;
      }else{
        this.router.navigate(['/','auth']);
        return false;
      }
      
      
    } catch (error) {
      console.log('algo sucedio ',error);
      return false;
    }
  }
  
}
