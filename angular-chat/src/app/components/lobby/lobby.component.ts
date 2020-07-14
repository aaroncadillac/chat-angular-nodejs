import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';
import { Router } from '@angular/router';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {
  public userlist: Array<string> = []
  public historyNotifications: object = {};
  private socket: any;
  public lobbyEmptyMessage: string = ':( Lo sentimos, no hay más usuarios, invita a tus amigos a unirse';

  constructor(private socketService: SocketService, private router: Router, private history: HistoryService) {
    this.userlist = socketService.usersList
    this.socket = socketService.socket
    history.notifications.on('one unread more', username => {
      this.historyNotifications[username] = (this.historyNotifications[username] || 0) + 1
    })
    history.notifications.on('all readed', username => {
      delete(this.historyNotifications[username])
    })
  }

  ngOnInit(): void {
    this.socketService.currentConversation = '';
  }

  messageTo(username) {
    this.router.navigate(['chat', username])
  }

}
