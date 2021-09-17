import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { myconfig } from '../myconfig';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http :HttpClient) { }
  url = myconfig.API_URL_PRODUCTS + '/products.json';

  id:number = 0;
  private headers = new Headers({'Content-Type':'application/json'});

  addProducts(products: { id: string; name: string; price: number; }[]) {
    // return this.http.post(this.url, products);

    return this.http.put(this.url, products);
  }

  saveProducts(productsReceived : any[])
  {
   return this.http.put(this.url, productsReceived)
  }

  fetchProducts()
  {
    return this.http.get(this.url)
  }
  
  getDataTitle()
  {
    return this.http.get(myconfig.API_URL_PRODUCTS+"/tableTitle.json")
  }  
}
