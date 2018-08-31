/* Creating a component */

/* Import component */
import {Component} from '@angular/core';

/* Adding a class decorator. By adding a @ sign indicates a decorator */
@Component({
      selector: 'app-server',
      templateUrl: './server.component.html'
})
export class ServerComponent {
   serverId = 10;
   serverStatus = 'offline';


   getServerStatus() {

    return this.serverStatus;
   }
}
