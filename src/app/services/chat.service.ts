
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Firestore, collection, collectionSnapshots } from '@angular/fire/firestore';
import { Chat } from '../models/chat.model';
import { Subject } from 'rxjs';
import { Socket } from 'ngx-socket-io';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { ChatState } from 'src/ngrx/states/chat.state';
import { chatActions } from 'src/ngrx/actions/chat.action';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  serverAPI = 'http://localhost:1821/chat';

  Chat$ = new Subject<Chat[]>();

  constructor(public http: HttpClient, public socket: Socket, public store: Store<{chat: ChatState}>){

  }

  getMessages(roomId:string){
    // this.store.dispatch(chatActions.loadChats({roomId: roomId}))
    return this.http.get(`${this.serverAPI}/${roomId}`)
  }

  getMessage(roomId: string){
    console.log(roomId)
    return this.socket.fromEvent(`chat - ${roomId}`)
  }


  sendMessage(message: Chat):any{
    // console.log(message)
    return this.socket.emit('chat', message);
  }

}
