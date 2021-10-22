import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http: HttpClient) { 
  }
  getImages(): Observable <any> {
    const url = "https://jsonplaceholder.typicode.com/photos"
    return this.http.get<any>(url)
  }
  
}
  
