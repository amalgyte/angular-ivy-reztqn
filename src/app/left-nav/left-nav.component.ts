import { Component, OnInit } from '@angular/core';
import { MenuItem } from './_models';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {

  public menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = this.getMenuItems();
  }

  /**
   * Fetch the menu items
   */
  private getMenuItems(): MenuItem[] {
    return [
      { label: 'Inmates', route: ['/'], icon: 'list', },
      { label: 'Booking', route: ['booking'], icon: 'login' },
      { label: 'Bug Report', route: ['bug-report'], icon: 'bug_report' }
    ]
  }

}
