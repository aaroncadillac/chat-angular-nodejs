import { Component, OnInit, ViewChild, ComponentFactoryResolver, Input } from '@angular/core';
import { AddComponentDirective } from 'src/app/directives/add-component.directive';
import { MessageData } from 'src/app/interfaces/message';
import { AddItem } from 'src/app/utils/add-item';
import { SocketService } from 'src/app/services/socket.service';
import { MessageComponent } from '../message/message.component';
import { HistoryService } from 'src/app/services/history.service';


@Component({
  selector: 'app-message-scroll',
  templateUrl: './message-scroll.component.html',
  styleUrls: ['./message-scroll.component.scss']
})
export class MessageScrollComponent implements OnInit {
  private localSuscriber;
  @Input() public fromUser: string;
  @ViewChild(AddComponentDirective, {static: true}) addMessage: AddComponentDirective;

  constructor(private socketService: SocketService, private componentFactoryResolver: ComponentFactoryResolver, private history: HistoryService){

    this.socketService.localEmitter.on('local message outcome', data => {
      if (data.username == this.fromUser) {
        const messageObject = {
          isResponse: false, 
          message: data.message, 
          date: data.date
        }
        this.loadMessageOnView( new AddItem(MessageComponent, messageObject))
        this.history.addMessage(this.fromUser, messageObject, true)
      }
    })
    this.socketService.localEmitter.on('local message income', data => {
      if (data.username == this.fromUser) {
        const messageObject = {
          isResponse: true, 
          message: data.message, 
          date: data.date
        }
        this.loadMessageOnView( new AddItem(MessageComponent, messageObject))
        this.history.addMessage(this.fromUser, messageObject, true)
      }
    })
  }

  loadMessageOnView(message: AddItem) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(message.component);
    const viewContainerRef = this.addMessage.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(componentFactory);

    (<MessageData>componentRef.instance).data = message.data;

  }

  ngOnInit(): void {
    let messagesFromHistory = this.history.getHistory(this.fromUser)
    
    if(messagesFromHistory != undefined) {
      messagesFromHistory.forEach( e => {
        this.loadMessageOnView(
          new AddItem(
            MessageComponent, 
            {
              isResponse: e.isResponse, 
              message: e.message, 
              date: e.date
            }
          )
        )
      })
    }
  }

  ngOnDestroy(){
    this.socketService.localEmitter.removeAllListeners('local message outcome');
    this.socketService.localEmitter.removeAllListeners('local message income');
  }
}
