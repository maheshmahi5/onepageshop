import { Component, Output,EventEmitter,OnInit, Input } from '@angular/core'
import { Catalog } from '../models/app.interface';

import { CartService } from '../shared/app.service';
import { log } from 'util';
import { logging } from 'selenium-webdriver';
@Component({
    selector:'app-catalog',
    templateUrl:'./catalog.component.html',
    styleUrls: ['./catalog.component.scss']
        
})
export class CatalogComponent implements OnInit{
    @Output() public data = new EventEmitter();
    @Output() public data1 = new EventEmitter();
     @Input() amount3

    amount1 :any=0;
    citems:Catalog[]=[]
    items=[]
   
    constructor(private cartService:CartService){}
    
 
  
  Addtocart(item:Catalog)
  {
    

    this.citems.push(item)
   
    this.data.emit(this.citems)


    this.amount1=this.cartService.AddCart(item)
    
    this.data1.emit( this.amount1)

    console.log(this.amount1)
    
    
  
  }
 

  ngOnInit()
  {
    this.items= this.cartService.products_list();
              console.log(this.items)
  }

}