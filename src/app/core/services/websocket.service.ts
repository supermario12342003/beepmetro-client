import { Injectable } from '@angular/core';
import * as io from '@node/socket.io-client';
import { environment } from '@env/environment';

@Injectable()
export class WebsocketService {

  constructor() {
    if (environment.websocketHost) {
      var socket = io.connect(environment.websocketHost);
    }
    else {
      var socket = io();
    }
    socket.on('time', function(timeString) {
      console.log('Server time: ' + timeString);
    });

  }
}
