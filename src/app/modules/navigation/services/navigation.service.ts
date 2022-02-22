import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private sideNavSubject = new BehaviorSubject<any>(-1);
  sideNavToggleObservable = this.sideNavSubject.asObservable();
  constructor() { }
  toggleSideNav(value: boolean) {
    this.sideNavSubject.next(value);
  }
}
