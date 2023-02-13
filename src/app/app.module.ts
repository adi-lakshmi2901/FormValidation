import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ColorComponentComponent } from './color-component/color-component.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import {HttpClientModule} from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
//  import { AgGridModule } from 'ag-grid-angular/lib/ag-grid-angular.component';
@NgModule({
  declarations: [
    AppComponent,
    ColorComponentComponent,
    DisplayDataComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule,
    // AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
