import { Component, Input } from '@angular/core';
import { MessageData } from 'src/app/interfaces/message';

@Component({
  selector: 'app-message',
  template: `
  <div [class.response]="this.data.isResponse == true" class="message-container">
    <div class="message">
      <p class="message-content">{{data.message}}</p>
      <span class="date">{{data.date}}</span>
    </div>
  </div>
  `,
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements MessageData{

  @Input() data: any;

}
