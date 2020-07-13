import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private _messages: object = {};
  public notifications: any = new EventEmitter()

  constructor() { }

  addMessage(fromUser: string, message: object, readed: boolean = false) {
    this._messages[fromUser] = this._messages[fromUser] || []
    this._messages[fromUser].push(message)
    if(!readed) {
      this.notifications.emit('one unread more', fromUser)
    }
  }

  getHistory(fromUser: string) {
    const history = this._messages[fromUser] || undefined;
    this.notifications.emit('all readed', fromUser)
    return history
  }

}
