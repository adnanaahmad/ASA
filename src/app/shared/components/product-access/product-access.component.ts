import { Component, OnInit } from '@angular/core';
import {ConditionalBorderService} from "../../services/core/debugging/conditional-border.service";

@Component({
  selector: 'app-product-access',
  templateUrl: './product-access.component.html',
  styleUrls: ['./product-access.component.scss']
})
export class ProductAccessComponent implements OnInit {
  products: Array<{name: string, icon:string, checked: boolean}>  = [
    {name: 'FWA FINDER', icon: 'track_changes', checked: false},
    {name: 'CASE MANAGER', icon: 'desktop_windows', checked: false},
    {name: 'OUTCOME SIMULATOR', icon: 'grid_view', checked: false}
  ];
  constructor(public borderService: ConditionalBorderService) { }

  ngOnInit(): void {
  }

}
