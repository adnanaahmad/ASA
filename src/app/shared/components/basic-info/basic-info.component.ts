import {Component, Input, OnInit} from '@angular/core';
import {ConditionalBorderService} from "../../services/core/debugging/conditional-border.service";

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {
  @Input() title : string = '';
  constructor(public borderService: ConditionalBorderService) { }

  ngOnInit(): void {
  }

}
