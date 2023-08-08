import { DataService } from './services/data.service';
import { Component } from '@angular/core';
import { Item } from './models/item.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lesson-4';

  listItems: Item[] = []

  constructor(protected dataService: DataService) {
    this.listItems = this.dataService.listItems;
  }
}

