import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mat-dialog-close-button',
  templateUrl: './mat-dialog-close-button.component.html',
  styleUrls: ['./mat-dialog-close-button.component.scss']
})
export class MatDialogCloseButtonComponent implements OnInit {
  @Input() style: {} = {};
  constructor() { }

  ngOnInit(): void {
  }

}
