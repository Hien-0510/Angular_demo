import { createAction, props } from "@ngrx/store";
import { Chat } from "src/app/models/chat.model";


export const chatActions = {
    loadChats: createAction('[Chat] Load Chats', props<{roomId: string}>()),
    loadChatsSuccess: createAction('[Chat] Load Chats Success', props<{messages: Chat[]}>()),
    loadChatsFailure: createAction('[Chat] Load Chats Failure',props<{error: string}>()),

    sendChat: createAction('[Chat] Send Chat', props<{message: Chat, roomId: string}>()),
    sendChatSuccess: createAction('[Chat] Send Chat Success', props<{message: Chat, messages: Chat[]}>()),
    sendChatFailure: createAction('[Chat] Send Chat Failure', props<{error: string}>()),

    getChat: createAction('[Chat] Get Chat', props<{roomId: string}>()),
    getChatSuccess: createAction('[Chat] Get Chat Success', props<{message: Chat}>()),
    getChatFailure: createAction('[Chat] Get Chat Failure', props<{error: string}>()),
}
