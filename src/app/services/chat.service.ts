import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Firestore, collection, collectionSnapshots } from '@angular/fire/firestore';
import { Chat } from '../models/chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  listChats: Chat[] = [];
  itemsCollection = collection(this.firestore, 'chat');
  constructor(private firestore: Firestore) {
    this.getData();
   }
   getData() {
     collectionSnapshots(this.itemsCollection).subscribe((snapshot) => {
       let result = snapshot.map((doc) => doc.data());
       this.listChats = result as Chat[];
    });
   }

}
