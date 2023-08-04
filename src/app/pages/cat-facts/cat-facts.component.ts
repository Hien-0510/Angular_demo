
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { catState } from 'src/ngrx/states/cat-fact.state';
import { Observable } from 'rxjs';
import * as CatAction from 'src/ngrx/actions/cat-fact.action';


@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  styleUrls: ['./cat-facts.component.scss']
})
export class CatFactsComponent {
  catFacts$!:Observable<catState>;
  constructor(private store: Store<{ cats: catState }>) {
    this.catFacts$ = this.store.select('cats');
    this.store.dispatch(CatAction.getCats({ limit: 10 }));
    this.catFacts$.subscribe((data) => {
      console.log(data);
    })
  }

  ngOnInit() {
  
  }
}
