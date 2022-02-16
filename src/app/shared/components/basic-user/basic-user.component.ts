import {Component, Input, OnInit} from '@angular/core';
import {ConditionalBorderService} from "../../services/core/debugging/conditional-border.service";

@Component({
  selector: 'app-basic-user',
  templateUrl: './basic-user.component.html',
  styleUrls: ['./basic-user.component.scss']
})
export class BasicUserComponent implements OnInit {
  @Input() title : string = '';
  constructor(public borderService: ConditionalBorderService) { }

  ngOnInit(): void {
  }
}
