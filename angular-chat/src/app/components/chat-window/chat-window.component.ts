import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
  public username: string;
  public userTyping: boolean = false;
  public typingMessage: string = 'escribiendo...';
  @ViewChild('messageInput', { static: true }) input: ElementRef;
  constructor(private socketService: SocketService, private route: ActivatedRoute, private router: Router) {
    this.socketService.socket.on('typing', username => {
      if (this.username == username) {
        this.userTyping = true;
      }
    })
    this.socketService.socket.on('stop typing', username => {
      if (this.username == username) {
        this.userTyping = false;
      }
    })
  }

  ngOnInit(): void {
    this.input.nativeElement.focus()
    this.route.params.subscribe((params: Params) => {
      this.username = params.user; 
    });
    this.socketService.currentConversation = this.username;
  }

  toLobby() {
    this.router.navigate(['lobby'])
  }

  typing() {
    this.socketService.socket.emit('typing', this.username)
  }

  stopTyping() {
    this.socketService.socket.emit('stop typing', this.username)
  }

  sendMessage(message) {
    this.socketService.socket.emit('stop typing', this.username)
    this.socketService.sendMessage(this.username, message)
    this.input.nativeElement.value = ''
  }

}
