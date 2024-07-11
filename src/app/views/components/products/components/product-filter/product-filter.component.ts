import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.scss'
})
export class ProductFilterComponent {
  @Output() sortTypeEmitter = new EventEmitter();

  onSortBtnClick(sortType:any){
this.sortTypeEmitter.emit(sortType)
  }
}
