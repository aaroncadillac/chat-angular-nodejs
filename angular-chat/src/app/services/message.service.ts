import { Injectable } from '@angular/core';
import { AddItem } from '../utils/add-item';
import { MessageComponent } from '../components/message/message.component';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  getMessage() {
    let now = new Date();
    return new AddItem(
      MessageComponent, 
      {
        isResponse: false, 
        message: 'Lorem Ipsum dolor sit ammet', 
        date: now.toLocaleTimeString(
          navigator.language, 
          { 
            hour: '2-digit', 
            minute: '2-digit' 
          }
        )
      }
    )
  }

}
