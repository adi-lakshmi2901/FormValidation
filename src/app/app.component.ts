import { Component, OnChanges} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {ColorComponentComponent} from './color-component/color-component.component'
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form Validation';
  submitteddata:any;
  
  namePattern =/^[A-Za-z]+$/;
  numberPattern = /^[0-9]+$/;
  userNamePattern = /^[a-zA-Z][a-zA-Z0-9_-]{2,14}$/
  ;
  // fnameValue:unknown;
  // lnameValue:unknown;
  // usernameValue :unknown;
  // ageValue:unknown;
  // mailValue:unknown;
  // phoneValue:unknown;
  add_Info:unknown;
  addInfoValue:unknown;
  addInfoStatus = false;
  showAddInfo=false;
  
    form = new FormGroup({
      firstName : new FormControl("",Validators.compose([Validators.required, Validators.maxLength(256),Validators.minLength(3),Validators.pattern(this.namePattern)])),
      lastName : new FormControl("",Validators.compose([Validators.required,Validators.maxLength(256),,Validators.minLength(3),Validators.pattern(this.namePattern)])),
      username : new FormControl("",Validators.compose([Validators.required,Validators.pattern(this.userNamePattern)])),
      age : new FormControl("",Validators.compose([Validators.required,Validators.max(1000),Validators.min(0)])),
      mail : new FormControl("",Validators.compose([Validators.required,Validators.email])),
      phone : new FormControl("",Validators.compose([Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern(this.numberPattern)])),
      addInfo : new FormControl("",Validators.compose([Validators.required]))
    });
    constructor(private router : Router){}
  
  onSubmit(){
    console.log(this.form);
    this.submitteddata=this.form.value;
    this.router.navigate(['display-data'],{
      state: { submittedData : this.submitteddata}
    })
   
  }
  checkStatus(event:any){
    this.addInfoStatus = event;
    this.showAddInfo = true;
    console.log("check sttaus func: ",event);
  }
  handleInfo(event:any){
    this.add_Info = this.form.value.addInfo;
    this.addInfoValue = event;
    console.log("handle info func ",event);
  }
  get Firstname() {
    return this.form.get("firstName") ;
  }
  get Lastname() {
    return this.form.get("lastName") ;
  }
  get Email() {
    return this.form.get("mail") ;
  }
  get Phoneno() {
    return this.form.get("phone") ;
  }
  get Age() {
    return this.form.get("age") ;
  }
  get AdditionalInformation() {
    return this.form.get("addInfo") ;
  }
  get UserName() {
    return this.form.get("username") ;
  }

}
