import { Component, Input } from '@angular/core';

@Component({
  selector: 'Exam2',
  template: `
<div class="main">
    <div *ngFor="let item of exdata;"
        style="display: grid; grid-template-columns: 1fr 1fr;gap: 20px; line-height: 2.5em;">
        <div gravity="'bottom'" style="text-align:right;font-weight: 600;letter-spacing:.5px;" >{{item.name}}</div>
        <div style="text-align:left;">
            <span *ngFor="let key of item.key;let i=index;" >
                <span *ngIf="i!==0">+</span>
                <kbd>{{key}}</kbd>
            </span>
        </div>
    </div>
</div>
<style>
    .main {
        color: white;
        box-sizing: border-box;
        padding: .5em;
        border-radius: 4px;
        border: 1px solid hsl(126, 53%, 7%);
        background-color: #1e1e1ec1;
    }

    kbd {
        user-select: none;
        cursor: pointer;
        border-radius: 4px;
        border: 1px solid #00000082;
        padding: 0 4px;
        box-shadow: inset 3px -4px 8px #11223377;
    }

    kbd:active {
        color: transparent;
    }

</style>
    `
})
export class Exam2 {
    exdata:any=[
        {
          name:'Show All Commands',
          key:['Ctrl','Shift','P']
        },
        {
          name:'Go to File',
          key:['Ctrl','P']
        },
        {
          name:'Find in Files',
          key:['Ctrl','Shift','F']
        },
        {
          name:'Start Debugging',
          key:['F5']
        },
        {
          name:'Toggle Terminal',
          key:['Ctrl','`']
        }
      ]
}
