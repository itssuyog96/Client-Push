import { Component } from '@angular/core';
import { PusherService } from './pusher.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  messages = [];

  constructor(private ps: PusherService){}

  ngOnInit(){
    this.ps.messagesChannel.bind('client-new-message', (message) => {
      this.messages.push(message);
      // console.log(message);
    }).bind(this);
  }

  fire(event){
    console.log(event.target.value);
    this.ps.messagesChannel.trigger('client-new-message', {
      "message": event.target.value
    })
  }
}
