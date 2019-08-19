import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees = [];
  public employeeID;
  public errorMsg: any;
  constructor(private _employeeservice: EmployeeService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.employeeID = id;
    });
     this._employeeservice.getEmployees()
     .subscribe(
        data=>this.employees=data,
        error=>this.errorMsg=error
      );
  }
  onSelect(employee) {
    // this.router.navigate(['/employee-list',employee.id])
    this.router.navigate([employee.id],{relativeTo:this.route});
   }
  isSelected(employee) {
    // let id =  parseInt(employee.id);
    return employee.id === this.employeeID;   
  }
}
