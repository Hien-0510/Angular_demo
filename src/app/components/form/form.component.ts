import { AuthService } from 'src/app/services/auth.service';
import { DataService } from './../../services/data.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  listItems: Item[] = [];

  form: FormGroup = new FormGroup({});
  name: FormControl<string | null> = new FormControl('');
  price: FormControl<number | null> = new FormControl(0);
  quantity: FormControl<number | null> = new FormControl(0);
  description: FormControl<string | null> = new FormControl('');
  image: FormControl<string | null> = new FormControl('');

  constructor(protected dataService: DataService, public authService: AuthService) { 
    this.form.addControl('name',this.name);
    this.form.addControl('price', this.price);
    this.form.addControl('quantity', this.quantity);
    this.form.addControl('description', this.description);
    this.form.addControl('image', this.image);
    this.listItems = this.dataService.listItems;    
  }
  ngOnInit(): void {                    
    console.log(this.listItems.length !=0? this.listItems : 'No items');
  }
  
    onSubmit() {
      let newItem: Item = {
        id: Date.now().toString(),
        name: this.name.value?? 'Tên mặc định',
        price: this.price.value?? 0,
        description: this.description.value?? 'Mô tả mặc định',
        inStock: this.quantity.value?? 0,
        image: this.image.value?? 'https://picsum.photos/200/300',
      };
      if(!this.authService.user) {
        alert('Please login to add item');
        return;
      } else {
      this.dataService.addItem(newItem);
      this.form.reset();
      }
    }
}
