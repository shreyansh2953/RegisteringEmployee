import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment.dev'
import { Employee } from '../models/employee.model';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

// fetch all data from database
  get_All_Employee(){
   let url = environment.EMPLOYEE_BASE_URL +environment.employee.GET_ALL_EMPLOYEE;
          return this.http.get(url);
  }
  
  //adding customer
  add_Employee(emp : any){
    let url = environment.EMPLOYEE_BASE_URL + environment.employee.ADD_EMPLOYEE;
    return this.http.post(url,emp);
  }
  // fetch through id
  get_Employee_byId(id : any)
  {
    let url =environment.EMPLOYEE_BASE_URL +environment.employee.GET_EMPLOYEE_BYID + '/' +id;
    return this.http.get(url);
  }
  // delete through id
  delete_byid(id : any)
  {
    let url = environment.EMPLOYEE_BASE_URL + environment.employee.DELETE_EMPLOYEE_BYID + '/' +id;
    return this.http.delete(url);
  }
  // update by id
  update_byid(id : any,emp : any){
    let url = environment.EMPLOYEE_BASE_URL + environment.employee.UPDATE_EMPLOYEE + '/' +id;
    return this.http.put(url,emp);
  }
}
