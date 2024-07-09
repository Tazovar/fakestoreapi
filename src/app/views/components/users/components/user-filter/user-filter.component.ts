import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-filter',
  templateUrl: './user-filter.component.html',
  styleUrl: './user-filter.component.scss'
})
export class UserFilterComponent {
@Output() fitlerTypeEmitter:EventEmitter<string> = new EventEmitter();

  onUserFilterBtnClick(filterType:string){
    this.fitlerTypeEmitter.emit(filterType)
  }
}
