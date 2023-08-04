import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catFacts, CatFact } from '../models/cat-facts.model';
import { map, zip } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  title = 'Project';
  listCatFact: CatFact[] = [];
  constructor(protected httpClient: HttpClient) {}

  async getCatFact() {
    let result: CatFact;
    let response = this.httpClient.get('https://catfact.ninja/fact');
    let promise = await new Promise((resolve, reject) => {
      response.subscribe({
        next: (data) => {
          result = data as CatFact;
          result.id = Date.now().toString();
          resolve(result);
        },
        error: (error) => {
          reject(error);
        },
      });
    });

    return promise;
  }

  async getCatImage() {
    let result: string;
    let response = this.httpClient.get(
      'https://api.thecatapi.com/v1/images/search'
    );

    let promise = await new Promise((resolve, reject) => {
      response.subscribe({
        next: (data: any) => {
          result = data[0].url;
          resolve(result);
        },
        error: (error) => {
          reject(error);
        },
      });
    });

    return promise;
  }
  getCats(limit: number) {
    let zip$ = zip(this.getCatsfact(limit), this.getCatsImage(limit)).pipe(
      map(([catFact, catImage]) => {
        let facts = catFact['data'];
        let images = catImage;
        let result: catFacts[] = [];
        for (let i = 0; i < limit; i++) {
          result.push({
            catFact: facts[i],
            catImage: images[i],
          });
        }
        return result;
      })
    );
    return zip$;
  }

  getCatsfact(limit: number) {
    return this.httpClient.get<any>(
      `https://catfact.ninja/facts?limit=${limit}`
    );
  }
  getCatsImage(limit: number) {
    return this.httpClient.get<any>(
      `https://api.thecatapi.com/v1/images/search?limit=${limit}`
    );
  }
}