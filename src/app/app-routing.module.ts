import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './views/main/main.component';
import { UsersComponent } from './views/components/users/views/users/users.component';
import { UserDetailsComponent } from './views/components/users/views/user-details/user-details.component';
import { ProductsComponent } from './views/components/products/views/products/products.component';
import { ProductDetailsComponent } from './views/components/products/views/product-details/product-details.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './views/components/login/login.component';
import { UnAuthGuard } from './core/guards/un-auth.guard';
const routes: Routes = [
  {path:'',pathMatch:"full",redirectTo:'/login'},
  {path:'main',component:MainComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent,canActivate:[UnAuthGuard]},
  {path:'users',component:UsersComponent,canActivate:[AuthGuard]},
  {path:'users/details/:id',component:UserDetailsComponent,canActivate:[AuthGuard]},
  {path:'products',component:ProductsComponent,canActivate:[AuthGuard]},
  {path:'products/details/:id',component:ProductDetailsComponent,canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }