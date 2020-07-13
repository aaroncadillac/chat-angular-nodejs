import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { Router } from '@angular/router';
import { SessionManagerService } from './session-manager.service';
import { HistoryService } from './history.service';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  
  private _socket: any;
  private _hasSession: boolean = false;
  private _username: string = '';
  private _localEmmiter: any;
  private _usersList: Array<string> = [];
  private _currentConversation: string = '';
  
  constructor(private _router: Router, private _session: SessionManagerService, private _history: HistoryService) {
      this._socket = io()
      this._localEmmiter = new EventEmitter()

      this._socket.on('sign in', data => {
        this._username = data.username
        this._usersList = data.usersList
        this._hasSession = true;
        this._session.upSession()
        this._router.navigate(['lobby'])
      })

      this._socket.on('user added', username => {
        this._usersList.push(username)
      })

      this._socket.on('user left', username => {
        let index = this._usersList.findIndex(e => e == username)
        this._usersList.splice(index, 1)
      })

      this._socket.on('incoming message', data => {
        const messageData = {
          isResponse: true,
          message: data.message,
          date: data.date
        }
        if(data.username != this._currentConversation) {
          this._history.addMessage(data.username, messageData)
        }
        else {
          this._localEmmiter.emit('local message income', data)
        }
      })
  }
  
  public get socket() : any {
    return this._socket
  }
  
  public get localEmitter() : any {
    return this._localEmmiter
  }
  
  public get usersList() : Array<string> {
    return this._usersList
  }

  
  public get currentConversation() : string {
    return this._currentConversation
  }
  
  
  public set currentConversation(value : string) {
    this._currentConversation = value;
  }
  
  
  sendMessage(username: string, message: string) {
    const now = new Date();
    const nowHour = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    let messageData = {
      username,
      message,
      date: nowHour
    }

    this._socket.emit('message', messageData)
    messageData['isResponse'] = false
    this._localEmmiter.emit('local message outcome', messageData)
  }
  
}
