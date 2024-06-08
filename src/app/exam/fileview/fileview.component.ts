import { Component, Input } from '@angular/core';
import { FVService } from './fileview.service';

@Component({
  selector: 'app-fileview',
  templateUrl: './fileview.component.html',
  styleUrls: []
})
export class FileviewComponent {
  folderRoot: any = [{
    dirname: 'folder0',
    dir: [{
      dirname: 'folder00',
      dir: [{
        dirname: 'folder000',
        dir: [],
        files: [
          {
            id: 'ABC',
            name: 'ABC.txt',
          }, {
            id: 'CHN',
            name: 'CHN.css'
          }, {
            id: 'CAST',
            name: 'CAST.psd'
          }
        ]
      }],
      files: [
        {
          id: 'abc',
          name: 'abc.txt',
        }, {
          id: 'pqr',
          name: 'pqr.css'
        }
      ]
    },
    {
      dirname: 'folder01',
      dir: [{
        dirname: 'folder010',
        dir: [],
        files: [{
          id: 'ABC1',
          name: 'ABC.txt',
        }, {
          id: 'CHN1',
          name: 'CHN.css'
        }, {
          id: 'CAST1',
          name: 'CAST.psd'
        }]
      },
      {
        dirname: 'folder011',
        dir: [],
        files: [{
          id: 'ABC2',
          name: 'ABC.txt',
        }, {
          id: 'CHN2',
          name: 'CHN.css'
        }, {
          id: 'CAST2',
          name: 'CAST.psd'
        }]
      }
      ],
      files: [{
        id: 'abc1',
        name: 'abc.txt',
      }, {
        id: 'pqr1',
        name: 'pqr.css'
      }]
    }],
    files: [
      {
        id: 'pyth',
        name: 'Python.py',
      }, {
        id: 'helo',
        name: 'Hello.c'
      }
    ]
  }]
  childIndent: number = 0;
  docShow: boolean = true;
  constructor(public fvService: FVService) {
  }
}
@Component({
  selector: 'filerec',
  templateUrl: './recur.component.html',
  styleUrls: ['./fileview.component.css']
})
export class FileRec {
  @Input() folders: any = {};
  @Input() childIndent: any = 0;
  disToggle: boolean[] = [];
  constructor(public fvService: FVService) {
    this.disToggle = new Array(this.folders.length, false)
  }
  // ngOnInit(){
  //   console.log(this.folders)
  // }

}
@Component({
  selector: 'fileheader',
  templateUrl: './fileheader.component.html',
  styleUrls: ['./fileview.component.css']
})
export class FileHeader {
  openedFiles: any[] = [
    {
      id: 'abc',
      name: 'abc.py'
    },
    {
      id: 'pqr',
      name: 'pqr.css'
    },
    {
      id: 'CHN',
      name: 'CHN.css'
    }
   
  ]
  constructor(public fvService: FVService) {

  }
  ngOnInit() {
    this.fvService.getOpenNewFile.subscribe((data) => {
      //console.log(data)
      const idx1=this.openedFiles.findIndex((file)=>file.id===data.id)
      if(idx1===-1){
        // you can put next to opened file
        this.openedFiles.push(data);
      }
      this.setCurrEditFile(data.id);
    })
  }
  stackLastOpened: string[] = ['abc', 'pqr', 'hlo', 'CHN']
  closeFile(id: any) {
    //console.log('hello',this.openedFiles.filter((file)=>file.id!==id))
    this.openedFiles = this.openedFiles.filter((file) => file.id !== id)
    if (this.stackLastOpened.length > 1 && id === this.stackLastOpened[this.stackLastOpened.length - 1])
      this.fvService.setCurrEditFile = this.stackLastOpened[this.stackLastOpened.length - 2]
    // console.log(this.stackLastOpened[-1])
    // remove ele from stack i.e not opened anymore
    this.stackLastOpened = this.stackLastOpened.filter((tempId) => tempId !== id)
  }
  // currEditFile:any='pqr';
  setCurrEditFile(id: any) {
    //this.currEditFile=id;
    this.fvService.setCurrEditFile = id;
    this.stackLastOpened.push(id);
    //console.log(id)
  }
}
