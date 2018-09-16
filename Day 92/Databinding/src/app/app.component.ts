import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [ {type: 'server', name: 'Testserver', content: 'just a test'}];

  onServerAdded(serevrDate: {serverName: string, serverContent: string}) {
     this.serverElements.push({
       type: 'server',
       name: serevrDate.serverName,
       content: serevrDate.serverContent
     });
   }

   onBluePrintAdded(blueprintDate: {serverName: string, serverContent: string}) {
     this.serverElements.push({
       type: 'blueprint',
       name: blueprintDate.serverName,
       content: blueprintDate.serverContent
     });
   }


}
