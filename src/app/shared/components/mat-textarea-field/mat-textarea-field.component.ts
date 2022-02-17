import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mat-textarea-field',
  templateUrl: './mat-textarea-field.component.html',
  styleUrls: ['./mat-textarea-field.component.scss']
})
export class MatTextareaFieldComponent implements OnInit {
  @Input() label : string = '';
  @Input() placeholder: string = '';
  @Input() style: {} = {};
  @Input() required: boolean = false;
  @Input() type: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
