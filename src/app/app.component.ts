import { Component, OnChanges} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {ColorComponentComponent} from './color-component/color-component.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form Validation';
  
  showDetails = false;
  namePattern =/^[A-Za-z]+$/;
  numberPattern = /^[0-9]+$/;
  userNamePattern = /^[a-zA-Z-_]+$/;
  fnameValue='';
  lnameValue='';
  usernameValue ='';
  ageValue=0;
  mailValue='';
  phoneValue='';
  add_Info='';
  form:any;
  addInfoValue='';
  addInfoStatus = false;
  showAddInfo=false;
  ngOnInit(){
    this.form = new FormGroup({
      firstName : new FormControl("",Validators.compose([Validators.required, Validators.maxLength(256),Validators.minLength(3),Validators.pattern(this.namePattern)])),
      lastName : new FormControl("",Validators.compose([Validators.required,Validators.maxLength(256),,Validators.minLength(3),Validators.pattern(this.namePattern)])),
      username : new FormControl("",Validators.compose([Validators.required,Validators.pattern(this.userNamePattern)])),
      age : new FormControl("",Validators.compose([Validators.required,Validators.max(999),Validators.min(1)])),
      mail : new FormControl("",Validators.compose([Validators.required,Validators.email])),
      phone : new FormControl("",Validators.compose([Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern(this.numberPattern)])),
      addInfo : new FormControl("",Validators.compose([Validators.required]))
    })
  }
  onSubmit(){
    console.log(this.form.value);
    this.fnameValue = this.form.value.firstName;
    this.lnameValue = this.form.value.lastName;
    this.usernameValue = this.form.value.username;
    this.ageValue = this.form.value.age;
    this.mailValue = this.form.value.mail;
    this.phoneValue = this.form.value.phone;
    
    // console.log(this.form.value.firstName);
    if(this.form.invalid!= true)
    this.showDetails = true;
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
}
