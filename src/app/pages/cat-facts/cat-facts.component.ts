
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
  cats$ = new Observable<catState>();
  constructor(private store: Store<{ cats: catState }>) {}

  ngOnInit() {
    this.cats$ = this.store.select('cats');
    this.store.dispatch(CatAction.getCats({ limit: 5 }));
  }
}
