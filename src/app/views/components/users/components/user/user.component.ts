import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserAddUpdateModalComponent } from '../../modals/user-add-update-modal/user-add-update-modal.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
@Input() user:any
@Output() deleteUserEmitter:EventEmitter<any> = new EventEmitter()
constructor(private router:Router,private userService:UserService,private dialogRef:MatDialog){}

public onShowMoreBtnClick(){
this.router.navigate(['users/details',this.user.id])
}

public onDeleteBtnClick(){
this.userService.delete(this.user.id)
.subscribe((res) => {
this.deleteUserEmitter.emit(res)
})
}

onUpdateBtnClick(){
let modal = this.dialogRef.open(UserAddUpdateModalComponent, {
  width:'70%',
  height:'70%',
  data:{
    userId:this.user.id
  }
})
modal.componentInstance.formEmitter.subscribe((res) => {
  this.user = res;
})
}
}
