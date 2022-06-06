import { Product } from './../products';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {
  @Input() product!: Product;
  // configuring with an @Output() allows this component to emit an event when the value of the notify changes.
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
}
