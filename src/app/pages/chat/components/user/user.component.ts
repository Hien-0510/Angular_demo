
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { userName } from 'src/app/models/userName.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() userName: userName | null = {
    id: '1311',
    name: 'maploveNauan',
    email: 'maplovenauan@gmail.com',
    imgUrl: 'https://www.cet.edu.vn/wp-content/uploads/2018/05/nghe-nau-an-la-gi.jpg'
  }
  emailFromGroup!: FormGroup
  ngOnInit(): void {
    this.emailFromGroup = new FormGroup({
      email: new FormControl<string>('', [Validators.required])
    });
  }

  constructor(public userService: UserService) { }
}
