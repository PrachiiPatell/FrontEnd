
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import {FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  product: Array<Product>;
  loginForm=new FormGroup
  ({name:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
id:new FormControl('',[Validators.required,Validators.maxLength(2)]),

})

// addProduct() { 
//   console.log(this.loginForm.controls.id)
//   console.log(this.loginForm.controls.name)
  
//   // let body = {
//   //   "id": this.loginForm.controls.id,
//   //   "name": this.loginForm.controls.name,
//   // }
//   this.httpClient.post<Array<Product>>("http://localhost:8080/product/add", this.loginForm.value).subscribe((response) => {
//     this.getProductList();
//   })
// }



  bool=false;
 
  id: number | undefined;
  name: string;






loginProduct(){
  console.warn(this.loginForm.value);
}
get id1(){
  return this.loginForm.get('id')
}
get name1(){
  return this.loginForm.get('name')
}

  constructor(
    private httpClient: HttpClient
  ) {
    this.product = [];
    this.id = undefined;
    this.name = '';
   
  }
  ngOnInit(): void {
    this.getProductList();
  }

  
  getProductList()   {
    this.httpClient.get<Array<Product>>("http://localhost:8080/product/list").subscribe((product) => {  
      this.product = product;
    })
  }
 addProduct() { 
   console.log(this.loginForm.controls.id)
     console.log(this.loginForm.controls.name)
    
 let body = {
        "id": this.loginForm.controls.id,
    "name": this.loginForm.controls.name,
      }
     this.httpClient.post<Array<Product>>("http://localhost:8080/product/add", this.loginForm.value).subscribe((response) => {
       this.getProductList();
     })
 }
deleteProduct(id:number){
  
  console.log(id)
  this.httpClient.get<Array<Product>>("http://localhost:8080/product/delete?id="+id).subscribe((response) => {  
   
  })
  this.getProductList();
}
editProduct(product:Product){
   let body={
     "id": this.loginForm.value.id,
     "name": this.loginForm.value.name,
   }
console.log("edit called")
//this.id=this.id,
console.log(this.loginForm.value.id)
//this.name=product.name;
console.log(this.loginForm.value.name)
this.getProductList(); 

}

updateProduct(){
  console.log("hello")
  
  //this.bool=true;
 
  let body = {
    "id": this.loginForm.controls.id,
     "name": this.loginForm.controls.name
   }

   this.httpClient.post<Array<Product>>("http://localhost:8080/product/edit",this.loginForm.value).subscribe((response) => {
    console.log(response)
   
})  
this.getProductList(); 
}
}
