import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgMaterialIconModule } from 'ng-material-icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './components/message/message.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MessageScrollComponent } from './components/message-scroll/message-scroll.component';
import { AddComponentDirective } from './directives/add-component.directive';
import { LobbyComponent } from './components/lobby/lobby.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    ChatWindowComponent,
    WelcomeComponent,
    MessageScrollComponent,
    AddComponentDirective,
    LobbyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMaterialIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
