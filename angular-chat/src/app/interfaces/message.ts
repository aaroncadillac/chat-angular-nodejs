export interface MessageData {
  data: Message;
}

interface Message {
  isResponse: boolean;
  message: string;
  date: string;
}
