/* Creating a component */

/* Import component */
import { Component } from '@angular/core';

/* Adding a class decorator. By adding a @ sign indicates a decorator */
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles : [`
     .online{
         color:white;

  }`]
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'online';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  getServerStatus() {

    return this.serverStatus;
  }
}
