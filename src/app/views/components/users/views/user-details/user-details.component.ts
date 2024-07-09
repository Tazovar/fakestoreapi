import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit {
constructor(private activatedRoute:ActivatedRoute,private userService:UserService){}
userData:any

ngOnInit(): void {
  this.getUserById()
}

getUserById(){
this.activatedRoute.params.subscribe((param:any) => {
  if(param){
    let id = param['id']
    if(id){
      this.userService.getById(id)
      .subscribe((res) => {
        this.userData = res
        console.log(this.userData,"user details data");
        
      })
    }
  }
})
}
}
