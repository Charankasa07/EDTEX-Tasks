import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Location } from '@angular/common';
import { Leave, UserRegister } from '../User';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css'],
})
export class ApplyLeaveComponent implements OnInit {
  constructor(
    private message : NzMessageService

  ) {}
  leaves: Leave[] = [];
  users: UserRegister[] = [];
  currentUser: UserRegister = {
    leaves: [],
    role: '',
    name: '',
    phone: '',
    email: '',
    password: '',
    numberOfLeaves: 0,
  };
  leave: Leave = {
    id: uuid(),
    name: '',
    type: 'sick leave',
    startDate: '',
    endDate: '',
    reason: '',
    status: 'pending',
    managerReason: '',
  };
  //function for applying a leave
  onApplyLeave() {
    //checking whether user has any remaining leaves or not
    if (this.currentUser.numberOfLeaves > 0) {
      //getting currentUser data from the users array
      const user = this.users.filter(
        (user) => user.email === this.currentUser.email
      );
       //converting the startDate of the leave to the ISO String format
      const startDate = new Date(this.leave.startDate).toISOString();
      //comparing whether the startdate is greater than the current date or not
      if (startDate >= new Date().toISOString()) {
        //converting the endDate of the leave to the ISO String format
        const endDate = new Date(this.leave.endDate).toISOString();
         //comparing whether the endDate is greater than the startDate or not
        if (endDate >= startDate) {
          if (user.length) {
            //adding the users name to the leave 
            //for knowing the name of the employee to the employee 
            //in the overview of the leaves by employee
            this.leave.name = this.currentUser.name;
            //appending the leave to the currentUser leaves array
            this.currentUser.leaves.push(this.leave);
          }
  
          localStorage.setItem('currentUser',JSON.stringify(this.currentUser))
          //updating the user leaves in the users array in Local Storage
          this.users.forEach((user) => {
            if (user.email === this.currentUser.email) {
              //appending the leave to the user leaves
              user.leaves.push(this.leave);
              // user.numberOfLeaves -= 1;
            }
          });
          localStorage.setItem('users', JSON.stringify(this.users));
          //appending the leave to the leaves array in the local storage
          this.leaves.push(this.leave);
          //setting the leaves into the local storage
          localStorage.setItem('leaves', JSON.stringify(this.leaves));
          this.message.success("Leave Applied Successfully",{nzDuration:1000});
          setTimeout(()=>{
            window.location.href = 'http://localhost:4200/employee/track-leaves';
          },1000)
        } else {
          //displayin error message if the endDate is not greater than startDate
          this.message.error("End Date must be Start Date or greater",{nzDuration:3000});
          
        }
      } else {
        //displaying error message if the startDate is not greater than the current Date
        this.message.error('Start Date must be from Today or greater',{nzDuration:3000})
        
      }
    } else {
      this.message.error("You are out of leaves",{nzDuration:3000})
    }
  }
  ngOnInit(): void {
    const usersData = localStorage.getItem('users');
    //getting the current user data
    if (usersData) {
      this.users = JSON.parse(usersData);
    }
    const currentUserData = localStorage.getItem('currentUser');
    if(currentUserData){
      this.currentUser = JSON.parse(currentUserData)
    }else{
      window.location.href='http://localhost:4200/login'
    }
    //getting the leaves data from the local storage
    const leavesData = localStorage.getItem('leaves');
    if (leavesData) {
      this.leaves = JSON.parse(leavesData);
    }
  }
}
