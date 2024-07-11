import { Component, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductsService } from '../../services/products.service';
import { NgForm } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-product-add-update-modal',
  templateUrl: './product-add-update-modal.component.html',
  styleUrl: './product-add-update-modal.component.scss'
})
export class ProductAddUpdateModalComponent implements OnInit {
constructor(@Inject(MAT_DIALOG_DATA) private data:any,
private productService:ProductsService,private dialogRef:DialogRef){}
@ViewChild('myForm') myForm!:NgForm
@Output() formEmitter:EventEmitter<any> = new EventEmitter();
ngOnInit(): void {
 this.setDataToForm()
}

setDataToForm(){
  if(this.data?.productId){
    this.productService.getById(this.data.productId)
    .subscribe({
      next:(res) => {
        setTimeout(() => {
          this.myForm.setValue(res)
        }, 300);   
      } 
    })
  }
}

onFormSubmit(){
  if(this.data?.productId){
    this.productService.update(this.data.productId,this.myForm.value)
    .subscribe((res) => {
this.formEmitter.emit(res)
this.dialogRef.close()
    })
  }else{
    this.productService.create(this.myForm.value)
    .subscribe((res) => {
      this.formEmitter.emit(res)
      this.dialogRef.close()
    })
  }
}
}
