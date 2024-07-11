import { Component, EventEmitter, Inject, OnInit, Output, ViewChild, viewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-add-update-modal',
  templateUrl: './user-add-update-modal.component.html',
  styleUrl: './user-add-update-modal.component.scss'
})
export class UserAddUpdateModalComponent implements OnInit {
  @ViewChild("myForm") myForm!: NgForm;
  @Output() formEmitter:EventEmitter<any> = new EventEmitter();
constructor(private userService:UserService,
  @Inject(MAT_DIALOG_DATA) private dialogData:any,private dialogRef:MatDialogRef<any>){}
userData:any
ngOnInit(): void {
  if(this.dialogData?.userId){
    this.getUserById()
    setTimeout(() => {
      this.setData()
    }, 500);
  }
}
  getUserById(){
this.userService.getById(this.dialogData.userId)
.subscribe((res) => {
this.userData = res
console.log(this.userData);
})
  }

  setData(){
    if(this.userData){
      this.myForm.setValue(this.userData)
    }
  }

  onFormSubmit(){

    if(this.dialogData?.userId){
      this.userService.update(this.userData.id,this.myForm.value)
      .subscribe((res) => {
        this.formEmitter.emit(res)
        this.dialogRef.close()
      })
    }else{
      this.userService.create(this.myForm.value)
      .subscribe((res) => {
        if(res?.id){
            let newObject = {...this.myForm.value};
            newObject.id = res.id
            this.formEmitter.emit(newObject)
            console.log(newObject, "new object");
          this.dialogRef.close()
        }
      })
    }
  }
}
