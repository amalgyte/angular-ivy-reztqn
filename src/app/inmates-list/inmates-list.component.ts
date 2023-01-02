import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Inmate } from '../_models';
import { InmateService } from '../_services';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-inmates-list',
  templateUrl: './inmates-list.component.html',
  styleUrls: ['./inmates-list.component.scss'],
  host: {
    class: 'full-width'
  }
})
export class InmatesListComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public columns: string[] = ['referenceNumber', 'name', 'arrivalDate'];
  public dataSource: MatTableDataSource<Inmate>;
  public inmates: Inmate[] = [];

  constructor(private inmateService: InmateService) { }

  public ngOnInit(): void {
    this.loadInmates();

  }

  public ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * Load the list of inmates from the API
   */
  private loadInmates(): void {
    this.inmateService.getInmates().subscribe(
      (inmates: Inmate[]) => {
        this.inmates = [...inmates];
        this.dataSource = new MatTableDataSource<Inmate>(this.inmates);
        // too early here:
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
      },
      (err: any) => {
        console.error(err);
      }
    );
  }

}
