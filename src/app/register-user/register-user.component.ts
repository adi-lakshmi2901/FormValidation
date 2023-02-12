import { Component,ViewChild,ElementRef } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ColorComponentComponent} from '../color-component/color-component.component';
import { Router } from '@angular/router';
import { UserRegistrationService } from '../user-registration.service';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  @ViewChild('addInfoInput', { static: false }) addInfoInput?: ElementRef;
  submitteddata:any;
  indexArr:Array<number> =[0];
  count=0;
  namePattern =/^[A-Za-z]+$/;
  numberPattern = /^[0-9]+$/;
  userNamePattern = /^[a-zA-Z][a-zA-Z0-9_-]{2,14}$/;
  addInfoLabel='';
  add_Info:Array<string>=[];
  addInfoValue:Array<any>=[];
  addInfoStatus = false;
  showAddInfo=false;
  showAddInfoComponent=false;
  addInfoCount=0;
  addInfoCountFlag=false;
    form = new FormGroup({
      firstname : new FormControl("",Validators.compose([Validators.required, Validators.maxLength(256),Validators.minLength(3),Validators.pattern(this.namePattern)])),
      lastname : new FormControl("",Validators.compose([Validators.required,Validators.maxLength(256),,Validators.minLength(3),Validators.pattern(this.namePattern)])),
      username : new FormControl("",Validators.compose([Validators.required,Validators.pattern(this.userNamePattern)])),
      age : new FormControl("",Validators.compose([Validators.required,Validators.max(1000),Validators.min(1)])),
      mail : new FormControl("",Validators.compose([Validators.required,Validators.email])),
      phone : new FormControl("",Validators.compose([Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern(this.numberPattern)])),
      addInfo : new FormControl("",Validators.compose([Validators.required]))
    });
    constructor(private router : Router,private UserRegister: UserRegistrationService){}

  // upon clicking submit navigating to display-data
  onSubmit(){
    
    console.log(this.form);
    this.submitteddata=this.form.value;
    this.router.navigate(['display-data'],{
      state: { addInfos: this.add_Info, addInfoValues: this.addInfoValue}
    })
    this.UserRegister.saveUserDetails(this.submitteddata).subscribe((data)=>console.warn(data))
   
  }
  // function to show the additional information component if input entered in additional info label 
  showAddInfoFun(){
    
    this.showAddInfoComponent = true;
  }
  // checking status if additional information added in form or not
  checkStatus(event:any){
    this.addInfoStatus = event;
    
    
  }
  // tO get the additional information label from form
  // to get additional information value from common component
  handleInfo(event:any){
    // console.log("info: ",arr);
    this.add_Info.push(this.form.value.addInfo as string);
    this.addInfoValue.push(event[event.length-1]);
    console.log("info done:",this.addInfoValue);
    console.log("array: ",this.add_Info);
    this.addInfoCount=this.addInfoCount+1;
    if(this.addInfoCount>=3){
      this.addInfoCountFlag=true;
    }
    else{
      this.addInfoCountFlag=false;
    }
    this.addInfoLabel='';
    if(this.addInfoInput){
      this.addInfoInput.nativeElement.blur();

    }
    
    // console.log("existed: ",this.a);
    
  }
  
  updateIndex(){
    this.indexArr.push(this.count+1);
    this.count=this.count+1;
    console.log("add button clicked: ",this.indexArr);
  }
  get Firstname() {
    return this.form.get("firstname") ;
  }
  get Lastname() {
    return this.form.get("lastname") ;
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
