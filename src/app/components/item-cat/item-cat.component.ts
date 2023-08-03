import { Component, Input } from '@angular/core';
import { Cat } from 'src/app/models/cat-facts.model';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-item-cat',
  templateUrl: './item-cat.component.html',
  styleUrls: ['./item-cat.component.scss']
})
export class ItemCatComponent {
  @Input() cat!: Cat;


  constructor(private catService: CatService) {

  }
}
