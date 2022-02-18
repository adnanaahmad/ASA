import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mat-icon-button',
  templateUrl: './mat-icon-button.component.html',
  styleUrls: ['./mat-icon-button.component.scss']
})
export class MatIconButtonComponent implements OnInit {
  @Input() icon!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
