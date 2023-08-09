import { Route, Router, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  listItems: Item[] = [];
  

  constructor(public dataService: DataService,public router: Router, public authService: AuthService) { 
    this.listItems = this.dataService.listItems;
  }
  ngOnInit() {
    if(!this.authService.user) {
      return;
    }
  }
}
