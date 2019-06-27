import { Component,Input,OnInit,Output,EventEmitter} from '@angular/core'
import { CartService } from '../shared/app.service';
import { CatalogComponent } from '../catalog/catalog.component'


@Component({
    selector:'app-cart',
    templateUrl:'./cart.component.html',
    styleUrls: ['./cart.component.scss']
        
})
export class CartComponent implements OnInit{

 constructor(private cartService:CartService) {}


    @Input() citems
    @Input() amount1
    
    @Output() data1 = new EventEmitter
    
    
    amount2:number=0;
   
    Removefromcart(item:any,n:number)
    { 

      this.citems.splice(n,1)
    
      this.amount2=this.cartService.DeleteCart(item,n);

      this.data1.emit(this.amount2)
 
      
  }
    ngOnInit(){
    }
}
