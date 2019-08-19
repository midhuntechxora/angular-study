import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  constructor(private _employeeservice: EmployeeService,private route: ActivatedRoute,private router:Router) { }
  public employeeID;
  public errorMsg: any;
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.employeeID = id;
    });
 }
 goPrevious() {
   let previousId = this.employeeID - 1;
   this.router.navigate(['../',{id:previousId}],{relativeTo:this.route});
 }
 goNext() {
    let nextId = this.employeeID + 1;
    this.router.navigate(['../',{id:nextId}],{relativeTo:this.route});
  }
  goToDepartments() {
    let selectedId = this.employeeID ? this.employeeID : null; 
    this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route});

  }
  showContact() {
    this.router.navigate(['contact'],{relativeTo:this.route});
  }
}
