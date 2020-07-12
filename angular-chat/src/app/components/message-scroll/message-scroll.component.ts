import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AddComponentDirective } from 'src/app/directives/add-component.directive';
import { MessageService } from 'src/app/services/message.service';
import { MessageData } from 'src/app/interfaces/message';
import { AddItem } from 'src/app/utils/add-item';


@Component({
  selector: 'app-message-scroll',
  templateUrl: './message-scroll.component.html',
  styleUrls: ['./message-scroll.component.scss'],
  providers: [MessageService]
})
export class MessageScrollComponent implements OnInit {

  @ViewChild(AddComponentDirective, {static: true}) addMessage: AddComponentDirective;

  constructor(private messageService: MessageService, private componentFactoryResolver: ComponentFactoryResolver){}

  loadMessageOnView(message: AddItem) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(message.component);
    const viewContainerRef = this.addMessage.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(componentFactory);

    (<MessageData>componentRef.instance).data = message.data;

  }

  ngOnInit(): void {
    setInterval(() => {
      this.loadMessageOnView(this.messageService.getMessage())
    },5000)
  }

}
