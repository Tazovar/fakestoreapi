import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
constructor(private productService:ProductsService,private activatedRouter:ActivatedRoute){}
public product:any


ngOnInit(): void {
  this.getById()
}

getById(){
this.activatedRouter.params.subscribe((param:any) => {
  let id = param['id'];

  if(id){
    this.productService.getById(id)
    .subscribe((res) => {
      if(res){
        this.product = res;
      }
    })
  }
})
}
}
