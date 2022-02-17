import { Component, OnInit } from '@angular/core';
import {ConditionalBorderService} from "../../services/core/debugging/conditional-border.service";

@Component({
  selector: 'app-product-access-detail',
  templateUrl: './product-access-detail.component.html',
  styleUrls: ['./product-access-detail.component.scss']
})
export class ProductAccessDetailComponent implements OnInit {
  tabIndex: number = 0;
  constructor(public borderService: ConditionalBorderService) { }

  ngOnInit(): void {
  }

  nextButton() {
    if (this.tabIndex === 2) return;
    this.tabIndex++;
  }
  backButton() {
    if (this.tabIndex === 0) return;
    this.tabIndex--;
  }
}
