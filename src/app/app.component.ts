import {Component} from '@angular/core';
import {EasyWebWorker} from "easy-web-worker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   constructor() {
     this.run();
   }

   run() {
     const w = new EasyWebWorker<string, string>((worker) => {
       worker.onMessage((message) => {
         message.resolve("hello");
       });
     });
     w.send("")
       .then(s => console.log(s))
       .catch(e => console.error(e));
   }
}
