import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from '../models/cartitem';
import { product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
  
})
export class CartSummaryComponent implements OnInit {
  cartItems: CartItem[]=[];

  cartsItems:CartItem[];

  
  constructor(private cartService: CartService, private toastrService:ToastrService) {}

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.cartItems = this.cartService.list();
  }

  removeFromCart(product:product){
    this.cartService.removeFromOCart(product);
    this.toastrService.error("Silindi",product.productName + " sepetten silindi.")
  }
}