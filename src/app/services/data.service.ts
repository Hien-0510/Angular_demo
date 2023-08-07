import { Firestore, collection, addDoc, collectionSnapshots, updateDoc, doc, deleteDoc, query, where, getDocs } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  logout() {
    throw new Error('Method not implemented.');
  }
  loginWithGoogle() {
    throw new Error('Method not implemented.');
  }

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

  addToCart(item: any) {
    if(item.inStock <= 0){
      alert('Out of stock');
      return;
    }
    item.inStock -= 1;
    let index = this.listCart.findIndex((i) => i.id === item.id);
    if (index === -1) {
      item.inCart = 1;
      this.listCart.push(item);
    } else {
      this.listCart[index].inCart! += 1;
    }
  }

  cartTotal(){
    let total = 0;
    this.listCart.forEach((item) => {
      total += item.price * item.inCart!;
      this.listCart = [];
    });
    return total;

  }

  increaseItem(item: any) {
    if(item.inStock <= 0){
      alert('Out of stock');
      return;
    }
    item.inStock -= 1;
    let index = this.listCart.findIndex((i) => i.id === item.id);
    this.listCart[index].inCart! += 1;
  }

  decreaseItem(item: any) {
    item.inStock += 1;
    let index = this.listCart.findIndex((i) => i.id === item.id);
    if (this.listCart[index].inCart! > 1) {
      this.listCart[index].inCart! -= 1;
    } else {
      this.listCart.splice(index, 1);
    }
  }

  deleteCartItem(item: any) {
    let index = this.listCart.findIndex((i) => i.id === item.id);
    this.listCart.splice(index, 1);
  }

 }

 


