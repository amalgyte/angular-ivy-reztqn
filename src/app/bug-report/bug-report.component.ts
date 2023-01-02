import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bug-report',
  templateUrl: './bug-report.component.html',
  styleUrls: ['./bug-report.component.scss'],
  host: {
    class: 'full-width'
  }
})
export class BugReportComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
