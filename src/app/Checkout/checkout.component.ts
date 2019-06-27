import { Component, Input,OnInit} from '@angular/core'
import { ArgumentOutOfRangeError } from 'rxjs';


@Component({
    selector:'app-checkout',
    templateUrl:'./checkout.component.html',
    styleUrls: ['./checkout.component.scss']
        
})
export class CheckoutComponent{
@Input() amount1;

ngOnInit()
{

}
}