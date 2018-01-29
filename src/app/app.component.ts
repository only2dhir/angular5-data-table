import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  displayedColumns = ['position', 'firstName', 'lastName', 'email'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  rowClicked(row: any): void {
    console.log(row);
  }
}

export interface Element {
  position: number;
  firstName: string;
  lastName: string;
  email: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, firstName: 'John', lastName: 'Doe', email: 'john@gmail.com'},
  {position: 1, firstName: 'Mike', lastName: 'Hussey', email: 'mike@gmail.com'},
  {position: 1, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.com'},
  {position: 1, firstName: 'Martin', lastName: 'Kos', email: 'martin@gmail.com'},
  {position: 1, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com'}
];
