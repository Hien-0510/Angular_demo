
import { Component, Input } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { userName } from 'src/app/models/userName.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  userName: userName | null = null;
  constructor(public authService: AuthService) { }

}
