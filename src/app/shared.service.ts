import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private url = 'https://dummyjson.com/users/add'; 
  private baseUrl = 'https://dummyjson.com/users';
  private puturl ='https://fakestoreapi.com/users/';


  constructor( private http:HttpClient) { }
  users(){
   return this.http.get(this.url).subscribe(()=>{

    })
  }

  saveUser(data:any){
    return this.http.post(this.url ,data)
  }
  
// userPut(user:any){
//   return this.http.put(this.url, user);
// }
  
  deleteUser(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
