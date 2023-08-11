export interface Chat{
    id: string;
    content: string;
    sender: string;
    roomId: string;
    receiver: string;
    createAt: Date;
    updateAt: Date;
}