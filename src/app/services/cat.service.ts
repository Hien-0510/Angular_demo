 import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catFact } from '../models/cat-facts.model';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) {}
  
  getCatFacts(maxLength: number, limit: number): Observable<catFact[]>{
    let responseFacts = this.http.get<catFact[]>(
      `http://catfact.ninja/facts?max_length=${9999}&limit=${limit}`
    );
    return responseFacts;
  };

  getCatImages(limit: number): Observable<any>{
    return this.http.get(
      `http://api.thecatapi.com/v1/images/search?limit=${limit}`
    ); 
  }
}
