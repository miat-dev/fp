import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class FVService {
    private currEditFile:BehaviorSubject<string>=new BehaviorSubject<string>('CHN');
    private openNewFile:Subject<{id:string,name:string}> =new Subject<{id:string,name:string}>();
    set setCurrEditFile(id:string){
        this.currEditFile.next(id);
    }
    get getCurrEditFile(){
        return this.currEditFile;
    }
    set setOpenNewFile(args:{id:string,name:string}){
        this.openNewFile.next({...args});
    }
    get getOpenNewFile(){
        return this.openNewFile;
    }
}