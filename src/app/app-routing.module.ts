import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './views/main/main.component';
import { UsersComponent } from './views/components/users/views/users/users.component';
import { UserDetailsComponent } from './views/components/users/views/user-details/user-details.component';
const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'users',component:UsersComponent},
  {path:'users/details/:id',component:UserDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }