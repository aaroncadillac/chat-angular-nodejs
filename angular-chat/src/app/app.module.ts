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
import { ToggleThemeIconComponent } from './components/toggle-theme-icon/toggle-theme-icon.component';
import { SessionManagerService } from './services/session-manager.service';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    ChatWindowComponent,
    WelcomeComponent,
    MessageScrollComponent,
    AddComponentDirective,
    LobbyComponent,
    ToggleThemeIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMaterialIconModule
  ],
  providers: [SessionManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
