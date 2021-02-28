import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataCalculationService } from '../services/data-calculation.service';

@Injectable({
  providedIn: 'root'
})
export class DataCalculationGuard implements CanActivate {
  constructor(
    private _dataCalculationService: DataCalculationService,
    private _route: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._dataCalculationService.checkData()) {
      return true;
    } else {
      this._route.navigate(['']);
      return false;
    }
  }

}
