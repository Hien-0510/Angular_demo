import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { SharedMaterialModule } from 'src/app/modules/shared';
import { UserComponent } from './components/user/user.component';


@NgModule({
  declarations: [
    ChatComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    SharedMaterialModule
  ]
})
export class ChatModule { }
