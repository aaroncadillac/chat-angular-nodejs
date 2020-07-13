import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {

  socket: any;
  error: boolean = false;
  errorMessage: string = 'Nombre de usuario no dispobnible'

  constructor( socketService: SocketService, private router: Router ) {
    this.socket = socketService.socket
  }

  ngOnInit() {
    this.socket.on('sign in', () => {
      this.error = false;
    })
    this.socket.on('username not available', () => {
      this.error = true;
    })
  }

  sendUsername(username) {
    this.socket.emit('add user', username)
  }

}
