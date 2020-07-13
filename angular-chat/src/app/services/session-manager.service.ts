import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionManagerService implements CanActivate{
  private _session:boolean = false;

  constructor(private router: Router) { }

  canActivate(){
    if (!this._session) { this.router.navigateByUrl('/')}
    return true;
  }

  upSession() {
    this._session = true;
  }
}
