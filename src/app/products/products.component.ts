import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: any = [];
  filterProducts: any = [];
  url = 'https://fakestoreapi.com/products'

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.http.get(this.url).subscribe(success => {
      this.products = success
      this.filterProducts = success
      console.log(this.filterProducts)
    }, (error) => {
      console.log(error)
    }
    )

  }
  mySearch(event: any) {
    const searchValue = event.target.value.toLowerCase();
    console.log(searchValue)
    if (searchValue === '') {
      this.filterProducts = this.products;
    } else {
      this.filterProducts = this.products.filter((product: any) => product.title.toLowerCase().includes(searchValue)
      );
    }
    console.log(this.products.map((p: any) => p.title));
  }
}
