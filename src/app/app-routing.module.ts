import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayDataComponent } from './display-data/display-data.component';
import { RegisterUserComponent } from './register-user/register-user.component';
const routes: Routes = [
  {path:'',component: RegisterUserComponent},
  { path: 'display-data', component: DisplayDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }