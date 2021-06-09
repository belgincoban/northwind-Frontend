import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  products:product[] = [];
  dataLoaded = false;
  filterText="";
  
 
 
 constructor(private productService:ProductService,
  private activatedRoute:ActivatedRoute,
  private toastrService:ToastrService,private cartService:CartService){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"])
      }else{
        this.getProducts()
      }
    }) 


    
  }
// ürünleri getirdik
getProducts(){
  this.productService.getProducts().subscribe(response=>{
    this.products = response.data
    this.dataLoaded = true;
  })

}

getProductsByCategory(categoryId:Number){
  this.productService.getProductsByCategory(categoryId).subscribe(response=>{
    this.products = response.data
    this.dataLoaded = true;


  })

}
addToCart(product:product){
  if(product.productId==1){
    this.toastrService.error("Hata","Bu ürün eklenemz")
  }else{
  this.toastrService.success("Sepete Eklendi",product.productName)
  this.cartService.addToCart(product); 
}
}

}