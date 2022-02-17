import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mat-form-field',
  templateUrl: './mat-form-field.component.html',
  styleUrls: ['./mat-form-field.component.scss']
})
export class MatFormFieldComponent implements OnInit {
  @Input() label : string = '';
  @Input() placeholder: string = '';
  @Input() styleField: {} = {};
  @Input() required: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
