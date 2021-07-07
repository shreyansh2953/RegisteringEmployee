import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeComponent} from './employee/employee.component'
import {ViewTableComponent} from './view-table/view-table.component'

const routes: Routes = [
  {
    path: 'employees',
    component : EmployeeComponent
  },
  {
    path: 'view',
    component : ViewTableComponent

  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
