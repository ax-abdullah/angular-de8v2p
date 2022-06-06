import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Product, products } from '../products';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product:Product | undefined;
  // ActivatedRoute is specific to each component that the angular router loads.
  // AcitvatedRoute contains information about the route and the route's parameters.
  // By injecting ActivatedRoute, you are configuring the component to use a service.
  constructor(private route: ActivatedRoute, private _CartService: CartService) { }

  ngOnInit(): void {
    //First get the proudct id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
    // the route parameters correspond to the path variables you define in the route. to access the route parameters, we use route.snapshot, which is the ActivatedRouteSnapshot that contains information about the ctive route at that particular moment in time.
    // the URL that matches the route provieds the productId. Angular uses the productid to display the details for each unique product.
  }
  addToCart(product:Product){
      this._CartService.addToCart(product);
      window.alert('your product has been added to the cart');

  }
  
}
