import { Component, OnInit } from '@angular/core';
import { PlaceOrderComponent } from "../PlaceOrder/placeOrder.component";
import { Order } from "../model/Order.model";
import { OrderService } from "../Service/Order.service";
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
order: Order;

  constructor(
    private os: OrderService,
    private matDialog: MatDialog) { }

  ngOnInit(): void {

  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    let dialogRef = this.matDialog.open(PlaceOrderComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data => {this.order = data;});
  }
}
