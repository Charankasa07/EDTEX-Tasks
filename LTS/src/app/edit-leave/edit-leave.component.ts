import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, TitleStrategy } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Leave, UserRegister } from '../User';

@Component({
  selector: 'app-edit-leave',
  templateUrl: './edit-leave.component.html',
  styleUrls: ['./edit-leave.component.css']
})
export class EditLeaveComponent implements OnInit{
  constructor(private route : ActivatedRoute,private cookieService : CookieService){}
  leaves : Leave[]=[]
  leaveId=''
  currentUser : UserRegister={
    role:'',
    name:'',
    mobile:'',
    email:'',
    password:'',
    leaves:[],
    numberOfLeaves:0,
  }
  leave : Leave = {
    id:'',
    name:this.currentUser.name,
    type:'',
    startDate:'',
    endDate:'',
    reason:'',
    status:'',
    managerReason:''
  }
  ngOnInit(): void {
      this.leaveId = this.route.snapshot.params['id']
      const leavesData = localStorage.getItem('leaves')
      if(leavesData){
        this.leaves = JSON.parse(leavesData)
      }
      this.leave = this.leaves.filter(leave => leave.id === this.leaveId)[0]
      if(this.leave.status!=='pending'){
        alert("You can't edit your leave as it is already responded")
        window.location.href = 'http://localhost:4200/employee/track-leaves'
      }
      
  }
  save(){
    this.leaves = this.leaves.filter(leave => leave.id !== this.leaveId)
    this.leaves.push(this.leave)
    localStorage.setItem('leaves',JSON.stringify(this.leaves))
    const currentUserData = this.cookieService.get('currentUser')
    if(currentUserData){
      this.currentUser = JSON.parse(currentUserData)
    }
    this.currentUser.leaves = this.currentUser.leaves.filter(leave => leave.id !== this.leaveId)
    this.currentUser.leaves.push(this.leave)
    this.cookieService.set('currentUser',JSON.stringify(this.currentUser),1,'./')
    window.location.href = "http://localhost:4200/employee/track-leaves"
  }
}
