import { Component,OnInit ,ViewChild} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
// import { ColDef ,GridReadyEvent } from 'ag-grid-community';
import { UserRegistrationService } from '../user-registration.service';
import { AgGridModule } from 'ag-grid-angular/public-api';
import { AgGridAngular } from 'ag-grid-angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../userDetails';
import {  ColDef ,GridReadyEvent,Grid} from 'ag-grid-community';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent {
  public rowData$!: Observable<IUser[]>;
  data:any;
  lastId=1;
  selectedUser:any;
  addInfo:Array<string>=[];
  addInfoValues :Array<string>=[];
  public colHeadings:ColDef[]=[
    {field:'firstname'},
    {field:'lastname'},
    {field: 'username'},
    {field:'age'},
    {field: 'mail'},
    {field: 'phone'},
    
    {field:'id'}
  ];
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  
  constructor(private router:Router,private route:ActivatedRoute,private userRegistration:UserRegistrationService, private http: HttpClient){
    // data from form is collected here
    this.addInfo=this.router.getCurrentNavigation()?.extras.state?.['addInfos'];
    this.addInfoValues= this.router.getCurrentNavigation()?.extras.state?.['addInfoValues'];
  }
  
 
  
 
  ngOnInit(){
    this.userRegistration.getUserDetails().subscribe((data)=>{
    console.warn("data",data);
    this.lastId = Math.max(...data.map(user => user.id));
    this.selectedUser = data.find(user => user.id === this.lastId);
    this.data=data;
    console.log("this",this.data);
  })
  }
}
