import { Component } from '@angular/core';
// import { item, citem } from '../models/catalog.interface';
import { OnInit,Output } from "@angular/core";
import { EventEmitter } from '@angular/core';
import { Catalog } from '../models/app.interface';

export class CartService {
    
     cartAdding  = new EventEmitter();
     total_amount:number=0;
     products_count  = 0;
     price=0;
     final:number;
     
    constructor(){}
     productListData:Catalog[] = [
    {
      id:1,
      item:"Bat",
      price:2000
    },
    {
      id:2,
      item:"Gloves",
      price:1000
    },
    {
      id:3,
      item:"Pads",
      price:500
    },
    {
      id:4,
      item:"Helmet",
      price:1500
    },
    {
      id:5,
      item:"Shoe",
      price:3000
    }
  ]
    AddCart(item:Catalog){
    this.total_amount +=item.price;
    return this.total_amount;
    }
    DeleteCart(product,id:number){
      
    this.total_amount -=product.price
    return this.total_amount;
    
    }
    products_list(){
    return this.productListData;
    }

}