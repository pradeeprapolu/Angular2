import {Component} from '@angular/core';

import {MessagesService} from './messages.service';

//import {AutoGrowDirective} from './auto-grow.directive';

@Component({
selector: 'messages',
template: `
<h1>Messages</h1>
<ul>
<li *ngFor = "let m of messages">{{m}}</li>
</ul>
<input type ="text" autoGrow />

`
    
})

export class MessagesComponent {

    messages;

    constructor(messagesService: MessagesService){
        this.messages = messagesService.getMessages();
    }

}