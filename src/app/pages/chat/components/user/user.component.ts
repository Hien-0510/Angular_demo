
import { Component, Input } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Chat } from 'src/app/models/chat.model';
import { Item } from 'src/app/models/item.model';
import { userName } from 'src/app/models/userName.model';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';
import { DataService } from 'src/app/services/data.service';
import { chatActions } from 'src/ngrx/actions/chat.action';
import { ChatState } from 'src/ngrx/states/chat.state';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  userName: userName | null = null;
  newMessage = '';
  listItems: Item[] = []
  chat$!: Observable<ChatState>
  messages: Chat[] = [];

  constructor(protected dataService: DataService, public chatService: ChatService, public store: Store<{chat: ChatState}>) {
    this.listItems = this.dataService.listItems;
    this.chat$ = this.store.select('chat');
    // this.chat$ = this.chatService.getMessage('1')
    this.store.dispatch(chatActions.loadChats({roomId: "1"}))
    this.store.dispatch(chatActions.getChat({roomId: "1"}))


    this.chat$.subscribe((result) => {
      this.messages = result.messages
    })


    this.chat$.subscribe((result) => {
      // this.store.dispatch(chatActions.getChat({roomId: "1"}))
      console.log(result.messages)
    })
  }


//send and get messages realtime



  send(){
    let newMessage:Chat = {
      id: new Date().getTime().toString(),
      content: this.newMessage,
      sender: 'user',
      roomId: '1',
      receiver: 'bot',
      createAt: new Date(),
      updateAt: new Date()
    }
    this.chatService.sendMessage(newMessage)

  }

}
