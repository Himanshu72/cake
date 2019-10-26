import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cakeshop',
  templateUrl: './cakeshop.component.html',
  styleUrls: ['./cakeshop.component.css']
})
export class CakeshopComponent implements OnInit {
cake1:number=200;
cake2:number=300;
cake3:number=400;
  constructor() { }

  ngOnInit() {
  }

  fun(x){
    if(x==1)
    Swal.fire(`RS ${this.cake1}`, 'Succesfully Ordered Chocolate Cake', 'success')
    if(x==2)
    Swal.fire(`RS ${this.cake2}`, 'Succesfully Ordered Stawberry Cake', 'success')
    if(x==3)
    Swal.fire(`RS ${this.cake3}`, 'Succesfully Ordered Wedding Cake', 'success')
   
  }
  onChange(value,x){
    if(x==1)
    this.cake1=200*value;
    if(x==2)
    this.cake2=300*value;   
    if(x==3)
    this.cake3=400*value;
    
  }

}
