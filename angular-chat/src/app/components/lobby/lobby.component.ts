import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {
  userlist: Array<string>
  constructor() {
    this.userlist = [
      "user1",
      "user2",
      "user3"
    ]
  }

  ngOnInit(): void {
  }

}
