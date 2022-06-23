import { Component, OnInit } from '@angular/core';
import { Item } from "../model/Item.model";
import { Order } from "../model/Order.model";
import { OrderService } from "../Service/Order.service";
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-placeOrer',
  templateUrl: './placeOrder.component.html',
  styleUrls: ['./placeOrder.component.css']
})


export class PlaceOrderComponent implements OnInit {

  orders : Order[]; 
  tables : number[] = [1, 5, 7];
  order : Order;
  items: Item[] = [new Item("Drink", 5, "A vintage wine of your choice"), 
  new Item("Steak", 20, "Filet Mignon garnished with parsley"), 
  new Item("Salad", 5, "Prepared according to your specification"), 
  new Item("Roll", 3, "Served with butter"), 
  new Item("Soup", 3, "Daily special")];
  itemchecked : Boolean = false;
  form = new FormGroup({
    tableSelected: new FormControl(['', Validators.required]),
    name: new FormControl(['', Validators.required])
  });
  constructor(
  private os: OrderService,
  public dialogRef: MatDialogRef<PlaceOrderComponent>) {

   }

  ngOnInit(): void {
    // this.os.getOrders().subscribe(data => {this.orders = data;})
    // for (let i = 1; i <= 10; i++){
    //   let flag = true
    //   this.orders.forEach(o => {
    //     if(o.tableNo == i){
    //      flag = false; 
    //     }});
    //   if(flag){
    //   this.tables.push(i);}}
  }
    
    onChange(item : Item, checked : Boolean){

      if(checked){
        this.order.items.push(item);
        this.order.total += item.price;
      }
      else{
        this.order.items = this.order.items.splice(this.items.indexOf(item), 1);
        this.order.total -= item.price;
        if(!this.order.items){
          this.itemchecked = false;
        }
      }
      if(this.order.items){
        this.itemchecked = true;
      }
    }
    close() {
      this.dialogRef.close();
    }
  
  }


