import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UserRegistrationService } from '../user-registration.service';
@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent {
  data:any;
  lastId=1;
  selectedUser:any;
  addInfo:Array<string>=[];
  addInfoValues :Array<string>=[];
  constructor(private router:Router,private route:ActivatedRoute,private userRegistration:UserRegistrationService){
    // data from form is collected here
    this.addInfo=this.router.getCurrentNavigation()?.extras.state?.['addInfos'];
    this.addInfoValues= this.router.getCurrentNavigation()?.extras.state?.['addInfoValues'];
  }
  ngOnInit(){
    this.userRegistration.getUserDetails().subscribe((data)=>{
    console.warn(data);
    this.lastId = Math.max(...data.map(user => user.id));
    this.selectedUser = data.find(user => user.id === this.lastId);
    this.data=data;
  })
  }
}
