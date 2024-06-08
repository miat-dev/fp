import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { connect, Observable } from 'rxjs';
//import * as Rx from 'rxjs/Rx';
import { environment } from '../environments/environment'
@Injectable({
    providedIn: 'root'
})
export class WebsocketService {
    socket: any;
    constructor() {
    }
    setupSocketConnection() {
        this.socket = io(environment.SOCKET_ENDPOINT);
        this.listen('connect').
        subscribe(res => {console.log('Connected User');this.emit('message','Connected User') })
        //this.emit('my_event', 'Hello there from Angular.');
    }
    listen(eventName: string) {
        return new Observable(subscribe => {
            this.socket.on(eventName, (data: any) => {
                subscribe.next(data)
            })
        })
    }
    emit(eventName:string,data:any){
        this.socket.emit(eventName,data);
    }
    disconnect() {
        if (this.socket) {
            this.socket.disconnect();
            console.log('Disconnected')
        }
    }
}
