import { Component, ElementRef, ViewChild } from '@angular/core';
import { MserviceService } from '../mservice.service'
import { WebsocketService } from '../websocket.service';
import Hls from 'hls.js';
import { environment } from '../../environments/environment'

@Component({
    selector: 'app-m-notifi',
    templateUrl: './m-notifi.component.html',
    styleUrls: ['./m-notifi.component.css']
})
export class MNotifiComponent {
    song: { type: string, title: string, artist: string, favourite: boolean, path: string } = {
        type: 'Music',
        title: 'Do pal ruka khawanbon ka',
        artist: 'Unknown',
        favourite: false,
        path: '2.m3u8'
    }
    isPaused: boolean = true;
    loop: string = 'loop';
    toggleLoop() {
        this.loop = this.loop === 'loop' ? 'loopOnce' : 'loop';
    }
    toggleFavourite() {
        this.song.favourite = !this.song.favourite;
    }
    playTrack() {
        if (this.isPaused)
            this.audioElement.play();
        else
            this.audioElement.pause();
        this.isPaused = !this.isPaused;

        //this.socketService.emit('stream_audio','*****hello Bro')
    }
    indicator: number = 0;
    max: number = 100;
    constructor(private myservice: MserviceService, private socketService: WebsocketService) {
        setInterval(() => {
            if (this.indicator < this.max)
                this.indicator = 1 + this.indicator;
            else this.indicator = 0;

        }, 1000)
    }
    result: any = 'res'
    getSongPaths() {
        //console.log(Hls)
        this.myservice.fetchMusicPaths().subscribe(data => this.result = data)
    }

    @ViewChild('audioPlayer') audioElementRef!: ElementRef;
    audioElement!: HTMLAudioElement;
    ngAfterViewInit(): void {
        this.audioElement = this.audioElementRef?.nativeElement;
        if (Hls.isSupported()) {
            console.log("Video streaming supported by HLSjs")
            var hls = new Hls();
            hls.loadSource(environment.AUDIO_END_POINT + this.song.path);
            hls.attachMedia(this.audioElement);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                // this.audioElement.play(); //default off
            });
        }

        else if (this.audioElement.canPlayType('application/vnd.apple.mpegurl')) {
            // alert("You're using an Apple product!");
            this.audioElement.src = environment.AUDIO_END_POINT + this.song.path;
        }
    }
   
    context: any;
    testingserver(val: string) {
        clearTimeout(this.context);
        this.context = setTimeout(() => {
            this.socketService.emit('my_event', val)
        }, 700)
    }
    socketres: any = ''
    // ngOnInit() {
    //     this.getSongPaths();
    //     this.socketService.setupSocketConnection();
    //     this.socketService.listen('my_response').
    //         subscribe(res => this.socketres = res)
    // }

    ngOnDestroy() {

        this.socketService.disconnect();
    }
}
