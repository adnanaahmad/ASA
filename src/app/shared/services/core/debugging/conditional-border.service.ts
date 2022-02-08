import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConditionalBorderService {
  public isBorder: boolean;
  constructor() {
    this.isBorder = true;
  }
  toggleBorder() {
    this.isBorder = !this.isBorder;
  }
}
