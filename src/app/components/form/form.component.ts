import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  @Input()
  listItems: Item[] = [];
    
  form: FormGroup = new FormGroup({});
  name: FormControl<string | null> = new FormControl('');
  price: FormControl<number | null> = new FormControl(0);
  quantity: FormControl<number | null> = new FormControl(0);
  description: FormControl<string | null> = new FormControl('');

  constructor() { 
    this.form.addControl('name',this.name);
    this.form.addControl('price', this.price);
    this.form.addControl('quantity', this.quantity);
    this.form.addControl('description', this.description);
  }
  ngOnInit(): void {
    console.log(this.listItems.length !=0? this.listItems : 'No items');
  }
  
    onSubmit() {
      let newItem: Item = {
        name: this.name.value?? 'Tên mặc định',
        price: this.price.value?? 0,
        description: this.description.value?? 'Mô tả mặc định',
        quantity: this.quantity.value?? 0
      };
      this.listItems.push(newItem);
      console.log(this.listItems);
    }
}
