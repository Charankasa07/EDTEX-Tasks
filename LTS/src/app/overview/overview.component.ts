import { Component, OnInit } from '@angular/core';
import { Leave } from '../User';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit{
  allLeaves: Leave[]=[]
  ngOnInit(): void {
      const leavesData = localStorage.getItem('leaves')
      if(leavesData){
        this.allLeaves = JSON.parse(leavesData)
        this.allLeaves = this.allLeaves.filter(leave => leave.status !== 'pending')
      }
  }
}
