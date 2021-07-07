import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {EmployeeService} from '../services/employee.service'
import {Validators} from '@angular/forms'
import {FormGroup,FormControl} from '@angular/forms'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  // making formgroup instance
  employeeForm = new FormGroup({
    name : new FormControl('',Validators.required),
    office : new FormControl(''),
    position : new FormControl(''),
    salary : new FormControl(''),
  })

  constructor(private employee   : EmployeeService) { }
    employeeList:any
    employeeService:any
  ngOnInit(): void {
    // this.getemployeeList();
    
  }
  getemployeeList(){
    this.employee.get_All_Employee().subscribe((data: object)=> {
      this.employeeService = data;
      this.employeeList = this.employeeService.data;
      console.log(this.employeeList);
    });
  }
  response : any
  message : any;
  msg = false;
   name = this.employeeForm.get('name');
   office = this.employeeForm.get('office');
   position = this.employeeForm.get('position');
   salary = this.employeeForm.get('salary');
 addvalue(){
           
     this.employee.add_Employee(this.employeeForm.value).subscribe((res)=>{
       this.getemployeeList(); 
       this.response = res;
       this.message = this.response.message;
       this.msg = true;
       this.employeeForm.reset();
     })
 }
   getemployeeById(id:any)
   {
     this.employee.get_Employee_byId(id).subscribe((data)=>{
       console.log(data);
     })
   }

  
 resetform(value : NgForm){
        value.reset();
       }

}
