import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from "../model/Order.model";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseURL = 'http://localhost:8080/order'
  constructor(private http: HttpClient) { }

  createOrder(order: Order): Observable<Order>{
    return this.http.post<Order>(this.baseURL, order);
  }
  
  updateOrder(order: Order): Observable<Order>{
    return this.http.put<Order>(this.baseURL, order);
  }

  deleteOrder(id: number): Observable<any>{
    return this.http.delete(this.baseURL + id, { observe: 'response'});
  }

  getOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(this.baseURL + "s");
  }
}
