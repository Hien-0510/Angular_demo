import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  @Input()
  listItem: Item[] = [];
    
  form: FormGroup = new FormGroup({});
  name: FormControl<string | null> = new FormControl('');
  price: FormControl<number | null> = new FormControl('');
  quantity: FormControl<number | null> = new FormControl('');
  description: FormControl<string | null> = new FormControl('');

  constructor() { 
    this.form.addControl('name',this.name);
    this.form.addControl('price', this.price);
    this.form.addControl('quantity', this.quantity);
    this.form.addControl('description', this.description);
  }
  
    onSubmit() {
      alert(JSON.stringify(this.form.value));
    }
}
