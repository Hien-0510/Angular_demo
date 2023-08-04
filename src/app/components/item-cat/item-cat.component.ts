import { Component, Input } from '@angular/core';
import { catFacts } from 'src/app/models/cat-facts.model';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-item-cat',
  templateUrl: './item-cat.component.html',
  styleUrls: ['./item-cat.component.scss']
})
export class ItemCatComponent {
  @Input() catFact!: catFacts;


  constructor(private catService: CatService) {

  }
}
