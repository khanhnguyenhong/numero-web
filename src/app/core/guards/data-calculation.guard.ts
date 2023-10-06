import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataCalculationService } from '../services/data-calculation.service';

@Injectable({
  providedIn: 'root'
})
export class DataCalculationGuard implements CanActivate {
  constructor(
    private dataCalculationService: DataCalculationService,
    private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.dataCalculationService.checkData()) {
      return true;
    } else {
      void this.router.navigate(['']);
      return false;
    }
  }

}
