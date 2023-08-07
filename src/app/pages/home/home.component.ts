import { Route, Router, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  listItems: Item[] = [];
  

  constructor(public dataService: DataService,public router: Router) { 
    this.listItems = this.dataService.listItems;
  }
}
