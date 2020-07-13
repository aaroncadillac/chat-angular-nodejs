import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LobbyComponent } from './components/lobby/lobby.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { SessionManagerService } from './services/session-manager.service';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'lobby', component: LobbyComponent, canActivate:[SessionManagerService]},
  { path: 'chat/:user', component: ChatWindowComponent, canActivate:[SessionManagerService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
