import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this._cartService.getItems();
  checkoutForm = this._Formbuilder.group({
    name: '',
    address: ''
  });
  constructor(private _cartService: CartService, private _Formbuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this._cartService.clearCart()
    console.warn('You order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
