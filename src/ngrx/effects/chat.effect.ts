import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, from, catchError, map, of, Observable } from "rxjs";
import { ChatService } from "src/app/services/chat.service";
import { chatActions } from "../actions/chat.action";


@Injectable()
export class ChatEffects {
    constructor(private chatService: ChatService, private action$: Actions) { }



    loadMessage = createEffect(() =>
        this.action$.pipe(
            ofType(chatActions.loadChats),
            switchMap((message) => {
                return from(this.chatService.getMessages(message.roomId)).pipe(
                    map((result: any) => {
                        return chatActions.loadChatsSuccess({ messages: result })
                    }),
                    catchError((error) => {
                        return of(chatActions.loadChatsFailure({ error }))
                    })
                )
            })
        ))

    getChats = createEffect(() => 
    this.action$.pipe(
        ofType(chatActions.getChat),
        switchMap((message) => {
            return from(this.chatService.getMessage(message.roomId)).pipe(
                map((result:any) => {
                    return chatActions.getChatSuccess({message: result})
                }),
                catchError((error) => {
                    return of(chatActions.getChatFailure({error}))
                })
            )
        }))
    )

    // sendMessage = createEffect(() => 
    // this.action$.pipe(
    //     ofType(chatActions.sendChat),
    //     switchMap((message) => {
    //         return from(this.chatService.sendMessage(message.message)).pipe(
    //             map((result:any) => {
    //                 return chatActions.sendChatSuccess({message: result})
    //             }),
    //             catchError((error) => {
    //                 return of(chatActions.sendChatFailure({error}))
    //             })
    //         )
    //     })
    // ))
}
