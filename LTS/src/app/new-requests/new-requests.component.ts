import { Component, OnInit } from '@angular/core';
import { Leave, UserRegister } from '../User';

@Component({
  selector: 'app-new-requests',
  templateUrl: './new-requests.component.html',
  styleUrls: ['./new-requests.component.css']
})
export class NewRequestsComponent implements OnInit{
  users : UserRegister[]=[]
  pendingLeaves : Leave[]=[]
  leaves : Leave[]=[]
  ngOnInit(): void {
      const leavesData = localStorage.getItem('leaves');
      if(leavesData){
        this.leaves = JSON.parse(leavesData)
        this.pendingLeaves = this.leaves.filter(leave => leave.status==='pending')
      }
      const usersData = localStorage.getItem('users')
      if(usersData){
        this.users = JSON.parse(usersData)
      }
  }
  accept(id:string){
    this.leaves.forEach(leave => {
      if(leave.id === id){
        leave.status='accepted'
      }
    })
    localStorage.setItem('leaves',JSON.stringify(this.leaves))
    let emps : UserRegister[] = this.users.filter(user => user.role==='employee')
    this.users = this.users.filter(user => user.role!=='employee')
    emps.forEach(emp=>{
      emp.leaves.forEach(leave => {
        if(leave.id === id){
          leave.status='accepted'
        }
      })
      this.users.push(emp)
    })
    localStorage.setItem('users',JSON.stringify(this.users))
    window.location.reload()
  }

  reject(id:string){
    this.leaves.forEach(leave => {
      if(leave.id === id){
        leave.status='rejected'
      }
    })
    localStorage.setItem('leaves',JSON.stringify(this.leaves))
    let emps : UserRegister[] = this.users.filter(user => user.role==='employee')
    this.users = this.users.filter(user => user.role!=='employee')
    emps.forEach(emp=>{
      emp.leaves.forEach(leave => {
        if(leave.id === id){
          leave.status='rejected'
        }
      })
      this.users.push(emp)
    })
    localStorage.setItem('users',JSON.stringify(this.users))
    window.location.reload()
  } 
}
