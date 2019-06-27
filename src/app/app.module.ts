import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component'
import { CatalogComponent } from './catalog/catalog.component'
import { CheckoutComponent } from './Checkout/checkout.component'
import { CartService } from '../app/shared/app.service'

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CatalogComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
