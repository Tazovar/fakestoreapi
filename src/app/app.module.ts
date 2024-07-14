import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CartComponent } from './views/components/carts/components/cart/cart.component';
import { CartFilterComponent } from './views/components/carts/components/cart-filter/cart-filter.component';
import { CartFormComponent } from './views/components/carts/components/cart-form/cart-form.component';
import { CartsComponent } from './views/components/carts/views/carts/carts.component';
import { CartAddUpdateModalComponent } from './views/components/carts/modals/cart-add-update-modal/cart-add-update-modal.component';
import { UserComponent } from './views/components/users/components/user/user.component';
import { UsersComponent } from './views/components/users/views/users/users.component';
import { UserDetailsComponent } from './views/components/users/views/user-details/user-details.component';
import { CartsDetailsComponent } from './views/components/carts/views/carts-details/carts-details.component';
import { UserFilterComponent } from './views/components/users/components/user-filter/user-filter.component';
import { UserFormComponent } from './views/components/users/components/user-form/user-form.component';
import { UserAddUpdateModalComponent } from './views/components/users/modals/user-add-update-modal/user-add-update-modal.component';
import { ProductsComponent } from './views/components/products/views/products/products.component';
import { ProductDetailsComponent } from './views/components/products/views/product-details/product-details.component';
import { ProductAddUpdateModalComponent } from './views/components/products/modals/product-add-update-modal/product-add-update-modal.component';
import { ProductFilterComponent } from './views/components/products/components/product-filter/product-filter.component';
import { ProductFormComponent } from './views/components/products/components/product-form/product-form.component';
import { MainComponent } from './views/main/main.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatDialogModule} from "@angular/material/dialog";
import { ProductComponent } from './views/components/products/components/product/product.component';
import { LoginComponent } from './views/components/login/login.component'
import { HeaderInterceptor } from './core/interseptors/http.interseptor';
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CartFilterComponent,
    CartFormComponent,
    CartsComponent,
    CartAddUpdateModalComponent,
    UserComponent,
    UsersComponent,
    UserDetailsComponent,
    CartsDetailsComponent,
    UserFilterComponent,
    UserFormComponent,
    UserAddUpdateModalComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ProductAddUpdateModalComponent,
    ProductFilterComponent,
    ProductFormComponent,
    MainComponent,
    NavbarComponent,
    ProductComponent,
    LoginComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    NgxPaginationModule,
    HttpClientModule,
  ],
  providers: [
    provideAnimationsAsync(),
    
    {
      provide: HTTP_INTERCEPTORS,
      useClass:HeaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }