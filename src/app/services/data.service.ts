import { Firestore, collection, addDoc, collectionSnapshots, updateDoc, doc, deleteDoc, query, where, getDocs } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  itemUpdate!: Item 

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

  async updateDoc(item: any) {
    let docRef = doc(this.firestore, 'item', item.id);
     await updateDoc(docRef,{... item} );
  }

  async deleteItem(id: string) {
    let q = query(this.itemsCollection, where('id', '==', id));
    let querySnapshot = await getDocs(q);
    let value =  querySnapshot.docs[0].id;
    await deleteDoc(doc(this.firestore, 'item', value));
  }
 }

 


