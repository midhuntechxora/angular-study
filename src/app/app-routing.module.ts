import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';


const routes: Routes = [
  {path: '', redirectTo: '/departments', pathMatch:'full'},
  {path: 'departments', component: DepartmentListComponent},
  {path: 'employee-list', component: EmployeeListComponent},
  {
    path: 'employee-list/:id', 
    component: EmployeeDetailComponent,
    children: [
      {path:'contact', component: EmployeeContactComponent}
    ]
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  DepartmentListComponent,
  EmployeeListComponent,
  EmployeeDetailComponent,
  PageNotFoundComponent,
  EmployeeContactComponent,
];
