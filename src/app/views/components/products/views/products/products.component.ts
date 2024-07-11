import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductAddUpdateModalComponent } from '../../modals/product-add-update-modal/product-add-update-modal.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
constructor(private productService:ProductsService,private matDialog:MatDialog){}
productsArray:Array<any> = [];
categoriesArray:Array<any> = [];
sortType:any = 'desc'
limit:any = 6
ngOnInit(): void {
  this.getAllProducts(this.limit,this.sortType)
  this.getAllCategories()
}


getAllProducts(limit:any,sortType:any){
  this.productService.getAll(limit,sortType)
  .subscribe((res) => {
    this.productsArray = res;
    console.log(this.productsArray,"productsArray");
  })
}

onMoreBtnClick(){
  this.limit+=6;
  this.getAllProducts(this.limit,this.sortType)
}

productidEmitterSub(id:any){
this.productService.delete(id)
.subscribe((res) => {
if(res){
  this.productsArray = this.productsArray.filter((product) => {
    return product.id != res.id
  })
} 
})
}

productUpdateEmitterSub(id:any){
let dialog = this.matDialog.open(ProductAddUpdateModalComponent, {
  width:'70%',
  height:'70%',
  data:{
    productId:id
  }
})

dialog.componentInstance.formEmitter.subscribe((res) => {
  let index = this.productsArray.findIndex((pr) => {
    return pr.id == res.id
  })
  if(index != -1){
    this.productsArray[index] = res;
  }
})
}

sortTypeEmitterSub(sortType:any){
  this.sortType = sortType
this.getAllProducts(this.limit,this.sortType)
}


getAllCategories(){
this.productService.getCategories()
.subscribe((rse) => {
  this.categoriesArray = rse
})
}

onCategoryBtnClick(category:any){
this.productService.getFiltered(category,this.limit,this.sortType)
.subscribe((res) => {
  this.productsArray = res
})
}

onAddNewproductBtnClick(){
  let dialog = this.matDialog.open(ProductAddUpdateModalComponent, {
    width:'70%',
    height:'70%',
    data:{}
  })

  dialog.componentInstance.formEmitter.subscribe((res) => {
    this.productsArray.unshift(res);
  })
}
}
