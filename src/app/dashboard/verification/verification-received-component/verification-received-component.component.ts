import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
 
@Component({
  selector: 'app-verification-received-component',
  templateUrl: './verification-received-component.component.html',
  styleUrls: ['./verification-received-component.component.css']
})
export class VerificationReceivedComponentComponent implements OnInit {

 
  constructor() {

  }

  displayedColumns: string[] = ['position', 'orderId', 'country', 'shipdate','status','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

export interface PeriodicElement {
  orderId: string;
  position: number;
  country: string;
  shipdate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, orderId: '0093-1016', country: 'Usa', shipdate: '2020-02-15'},
  {position: 2, orderId: '0093-1017', country: 'India', shipdate: '2020-02-15'},
  {position: 3, orderId: '0093-1018', country: 'India', shipdate: '2020-02-15'},
  {position: 4, orderId: '0093-1019', country: 'India', shipdate: '2020-02-15'},
  {position: 5, orderId: '0093-1020', country: 'India', shipdate: '2020-02-15'},
  {position: 6, orderId: '0093-1021', country: 'India', shipdate: '2020-02-15'},
  {position: 7, orderId: '0093-1022', country: 'India', shipdate: '2020-02-15'},
  {position: 8, orderId: '0093-1023', country: 'India', shipdate: '2020-02-15'},
  {position: 9, orderId: '0093-1024', country: 'India', shipdate: '2020-02-15'},
  {position: 10, orderId: '0093-1025', country: 'India', shipdate: '2020-02-15'},
  {position: 11, orderId: '0093-1026', country: 'India', shipdate: '2020-02-15'},
  {position: 12, orderId: '0093-1027', country: 'India', shipdate: '2020-02-15'},
  {position: 13, orderId: '0093-1028', country: 'India', shipdate: '2020-02-15'},
  {position: 14, orderId: '0093-1029', country: 'India', shipdate: '2020-02-15'},
  {position: 15, orderId: '0093-1030', country: 'India', shipdate: '2020-02-15'},
  {position: 16, orderId: '0093-1031', country: 'India', shipdate: '2020-02-15'},
  {position: 17, orderId: '0093-1032', country: 'India', shipdate: '2020-02-15'},
  {position: 18, orderId: '0093-1033', country: 'India', shipdate: '2020-02-15'},
  {position: 19, orderId: '0093-1034', country: 'India', shipdate: '2020-02-15'},
  {position: 20, orderId: '0093-1035', country: 'India', shipdate: '2020-02-15'},
];