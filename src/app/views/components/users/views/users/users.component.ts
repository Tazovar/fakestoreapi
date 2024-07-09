import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
 public usersArray:Array<any> = []
 public limit:number = 5;
constructor(private userService:UserService){}

 ngOnInit(): void {
    this.getAllUsers(this.limit);
    
  }
  
 public getAllUsers(limit:number){
    this.userService.getAll(limit)
    .subscribe((response:any) => {
      this.usersArray = response
      console.log(this.usersArray,"usersArray");
      
})
  }


  public onShowMoreUserBtnClick():void{
this.limit+=5
this.getAllUsers(this.limit)
  }


  public filterTypeEmitterSub(fitlerType:string){
    this.userService.getFiltered(fitlerType,this.limit)
    .subscribe((response) => {
      this.usersArray = response
    })
  }


  deleteUserEmitterSub(response:any){
    this.usersArray = this.usersArray.filter((user) => {
      return user.id != response.id
    })
  }
}
