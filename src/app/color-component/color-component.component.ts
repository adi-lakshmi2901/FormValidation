import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
@Component({
  selector: 'app-color-component',
  templateUrl: './color-component.component.html',
  styleUrls: ['./color-component.component.css']
})
export class ColorComponentComponent {
  @Output() sendInfo = new EventEmitter<string>();
  @Output() sendStatus = new EventEmitter<any>();
  showError = false;
  addInfo =true;
  form:any;
  ngOnInit(){
    this.form = new FormGroup({
      dropDown : new FormControl('Number',Validators.required),
      addInfo : new FormControl("",Validators.required)
    });
  }
  isString(str:string){
    return typeof str === 'string';
  }
  isNumber(str:string){
    return /^\d+$/.test(str);
  }
  isHexa(str: string){
    return /^[0-9A-Fa-f]+$/.test(str);
  }
  isBin(str:string){
    return /^[01]+$/.test(str);
  }
  isBoolean(str:string){
    return str === 'true' || str === 'false';
  }
  updateInfoValue(){
    let value = this.form.value.addInfo;
    let option = this.form.value.dropDown;
    if(!this.form.invalid)
    {
      if((this.isString(value) && option=="string") || (this.isBin(value) && option=="binary") || (this.isBoolean(value) && option=="boolean") || (this.isNumber(value) && option=="number") || (this.isHexa(value) && option=="Hexa Decimal"))
      {
        this.sendInfo.emit(value);
        this.showError = false;
      }
      else{
        // console.log(value,"   ",option);
        this.showError = true;
      }
      this.sendStatus.emit(this.form.invalid);
  }
  else
  {
    this.sendStatus.emit(this.form.invalid);
  }
  }

}
