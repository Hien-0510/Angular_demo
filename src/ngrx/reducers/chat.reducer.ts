import { createReducer, on } from "@ngrx/store";
import { chatActions } from "../actions/chat.action";
import { ChatState } from "../states/chat.state";


const initialState: ChatState = {
    message: null,
    messages: [],
    loading: false,
    error: ''
}

export const ChatReducer = createReducer(
    initialState,
    on(chatActions.loadChats, (state) => ({
        ...state,
        messages: [],
        loading: true,
    })),
    on(chatActions.loadChatsSuccess, (state,action) => ({
        ...state, 
        messages: [...action.messages,...state.messages],
        loading: false,
        error: ''
    })),
    on(chatActions.loadChatsFailure, (state,action) => ({
        ...state,
        loading: false,
        error: action.error
    })),

    on(chatActions.getChat, (state,action) => ({
        ...state,
        loading: true,
    })),
    on(chatActions.getChatSuccess, (state,action) => {
        console.log(action.message)
        return {
            ...state,
        loading: false,
        message: action.message,
        messages: [...state.messages, action.message],
        }
    }),

    on(chatActions.getChatFailure, (state,action) => ({
        ...state,
        loading: false,
        error: action.error
    }))

)