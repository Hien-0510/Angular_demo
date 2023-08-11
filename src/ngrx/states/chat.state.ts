import { Chat } from "src/app/models/chat.model";

export interface ChatState {
    message: Chat | null;
    messages: Chat[];
    loading: boolean;
    error: string;
}