import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit,OnChanges{
constructor(){
console.log('constructor called')
}
@Input()myValue="Prachi";
ngOnChanges(changes:SimpleChanges){
console.log('ngOnChanges Called')
}
ngOnInit(): void {
  console.log('ngOnInit Called')
}
}
