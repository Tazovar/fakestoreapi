import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
@ViewChild("loginForm") loginForm!:NgForm

constructor(private authService:AuthService,private router:Router){}
onFormSubmit(form:NgForm){
  if(form.invalid){
    form.form.markAsDirty()
    Object.keys(form.controls).forEach((key) => {
      form.controls[key].markAsDirty();
    })
    return;
  }


  this.authService.logIn(form.value)
  .subscribe((response) => {
    this.authService.setToken(response)
    this.loginForm.reset()
    this.router.navigate(['/main'])
  },(error) => {
if(error.status === 401){
  alert("იუზერი არ არსებობს")
}

  })
}
}
