import { Component, OnInit } from '@angular/core';
import {ConditionalBorderService} from "../../../../../shared/services/core/debugging/conditional-border.service";
import {MatDialog} from "@angular/material/dialog";
import {
  ProductAccessDetailComponent
} from "../../../../../shared/components/product-access-detail/product-access-detail.component";

@Component({
  selector: 'app-integrity-suite',
  templateUrl: './integrity-suite.component.html',
  styleUrls: ['./integrity-suite.component.scss']
})
export class IntegritySuiteComponent implements OnInit {

  constructor(public borderService: ConditionalBorderService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openProductAccessDetailDialog() {
    this.dialog.open(ProductAccessDetailComponent, { disableClose: true });
  }
}
