import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../services/employee.service'
import {FormGroup,FormControl} from '@angular/forms'
@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.css']
})
export class ViewTableComponent implements OnInit {

  constructor(private employee : EmployeeService) { }
  employeeList:any
  employeeService:any
  count : any;
   show = false;
   editemployeeForm : any
   val_id : any
  ngOnInit(): void{
    this.getallEmployee();
  }
  showtext(val : any)
  {
    this.editemployeeForm = new FormGroup({
      name : new FormControl(val.name),
      office : new FormControl(val.office),
      position : new FormControl(val.position),
      salary : new FormControl(val.salary)
    })
    console.log(val);
  this.val_id = val._id;
    this.show = true;
  }
  edit(val:any){
    console.log(val);
    this.employee.update_byid(this.val_id,val).subscribe((data)=>{
      console.log(data);
    })

    this.getallEmployee();
    this.show = false;
  }

  getid(val : any){
    console.log(val);
    console.log(prompt("are you sure"));
    this.employee.delete_byid(val).subscribe((data)=>{
      console.log(data);
    })
        this.getallEmployee();
  }
  getallEmployee(){
    this.employee.get_All_Employee().subscribe((data)=>{
      this.employeeService = data;
      this.employeeList = this.employeeService.data;
      console.log(this.employeeList)
      this.count = this.employeeService.count;
      console.log(this.employeeService.count);
    })
  }

}
