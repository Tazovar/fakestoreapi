import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
@Input() product:any
@Output() productidEmitter:EventEmitter<any> = new EventEmitter()
@Output() productUpdateEmitter:EventEmitter<any> = new EventEmitter()
constructor(private router:Router){}

onShowMoreBtnClick(id:any){
  this.router.navigate(['/products/details', id])
}

onDeleteBtnClick(id:any){
  this.productidEmitter.emit(id)
}

onUpdateBtnClick(id:any){
this.productUpdateEmitter.emit(id)
}
}
