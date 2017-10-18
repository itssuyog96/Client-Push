

import { environment } from '../environments/environment';
declare const Pusher:any;
export class PusherService {
    
  pusher: any;
  messagesChannel: any;

  constructor() {
    this.pusher = new Pusher(environment.pusher.key,{
            authEndpoint: '/users/auth',
            cluster: 'ap2',
            encrypted: true,
    });

    this.messagesChannel = this.pusher.subscribe('private-messages');
  }
}