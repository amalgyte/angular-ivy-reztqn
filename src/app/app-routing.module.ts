import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { BugReportComponent } from './bug-report/bug-report.component';
import { InmatesListComponent } from './inmates-list/inmates-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: InmatesListComponent
  },
  {
    path: 'booking',
    component: BookingComponent
  },
  {
    path: 'bug-report',
    component: BugReportComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
