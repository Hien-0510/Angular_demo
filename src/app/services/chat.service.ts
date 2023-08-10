
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Firestore, collection, collectionSnapshots } from '@angular/fire/firestore';
import { Chat } from '../models/chat.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  serverAPI = 'http://localhost:1821/chat';

  Chat$ = new Subject<Chat[]>();



}
