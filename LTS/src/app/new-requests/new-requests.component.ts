import { Component, OnInit} from '@angular/core';
import { faCheck,faXmark} from '@fortawesome/free-solid-svg-icons';
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
  managerMessage : string=''
  acceptIcon = faCheck
  rejectIcon = faXmark
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
    let message = prompt("Message for Accepting")
    if(message){
      this.managerMessage=message
    }
    this.leaves.forEach(leave => {
      if(leave.id === id){
        leave.status='accepted'
        leave.managerReason=this.managerMessage
      }
    })
    localStorage.setItem('leaves',JSON.stringify(this.leaves))
    let emps : UserRegister[] = this.users.filter(user => user.role==='employee')
    this.users = this.users.filter(user => user.role!=='employee')
    emps.forEach(emp=>{
      emp.leaves.forEach(leave => {
        if(leave.id === id){
          leave.status='accepted'
          leave.managerReason=this.managerMessage
        }
      })
      this.users.push(emp)
    })
    localStorage.setItem('users',JSON.stringify(this.users))
    window.location.reload()
  }

  reject(id:string){
    let message = prompt("Reason for Rejection")
    if(message){
      this.managerMessage=message
    }
    this.leaves.forEach(leave => {
      if(leave.id === id){
        leave.status='rejected'
        leave.managerReason=this.managerMessage
      }
    })
    localStorage.setItem('leaves',JSON.stringify(this.leaves))
    let emps : UserRegister[] = this.users.filter(user => user.role==='employee')
    this.users = this.users.filter(user => user.role!=='employee')
    emps.forEach(emp=>{
      emp.leaves.forEach(leave => {
        if(leave.id === id){
          leave.status='rejected'
          leave.managerReason=this.managerMessage
        }
      })
      this.users.push(emp)
    })
    localStorage.setItem('users',JSON.stringify(this.users))
    // window.location.reload()
  } 
}
