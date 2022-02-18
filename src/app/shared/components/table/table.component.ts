import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() tableData!: Array<any>;
  @Input() tableColumns!: Array<string>;
  displayedColumns!: Array<string>;
  dataSource!: MatTableDataSource<Array<any>>;

  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = this.tableColumns;
    this.dataSource = new MatTableDataSource(this.tableData);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
