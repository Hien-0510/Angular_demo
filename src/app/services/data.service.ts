import { Firestore, collection, addDoc, collectionSnapshots, updateDoc, doc } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  listCart: Item[] = [];
  listItems: Item[] = [];

  itemsCollection = collection(this.firestore, 'item');
  constructor(private firestore: Firestore) {
    this.getData();
   }
   getData() {
     collectionSnapshots(this.itemsCollection).subscribe((snapshot) => {
       let result = snapshot.map((doc) => doc.data());
       this.listItems = result as Item[];
   });
   }
   
   async addItem(newItem: Item) {
     let timestamp = Date.now().toString();
       newItem = {
         ... newItem,
         id: timestamp,
       };
       this.listItems.push(newItem);
       let result = await addDoc(this.itemsCollection, newItem);
   }

  updateDoc(item: any) {

  }
 }


