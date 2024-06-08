import { Component } from '@angular/core';
import { AuthService } from '../login/lservice.service';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent {
    constructor(public authService:AuthService){}
    user$?:any;
        todoData: any = [
        { id: 1672322564765, text: 'Hello todo!', isEditing: false },
        { id: 1672322587450, text: 'Hello owais!', isEditing: false },
        { id: 1672322587451, text: 'Abe yaar! Abe yaar!! Abe yaar! Abe yaar!', isEditing: false },
        { id: 1672322587452, text: 'Nothing!', isEditing: false }
    ]
    //inptext: string = '';
    isDocChange: boolean = false;
    addNewTodo(txt: string) {
        if (txt !== '') {
            this.todoData.push({ id: new Date().getTime(), text: txt, isEditing: false})
            //this.inptext = '';
            this.isDocChange = true;
        }
    }
    removeTodo(id: number) {
        this.todoData = this.todoData.filter((item: any) => item.id != id)
        //console.log(this.todoData)
        this.isDocChange = true;
    }
    editTodo(id: number, txt: string) {
        //console.log(typeof jus)
        let idx = this.todoData.findIndex((item: { id: number, text: string, isEditing: boolean }) => item.id === id);
        if (this.todoData[idx].isEditing) {
            this.todoData[idx].text = txt;
            this.todoData[idx].isEditing = false;
            this.isDocChange = true;
        }
        else
            {
                this.todoData[idx].isEditing = true;
            }
    //this.authService.UpdateProfile('Md Arsalan','https://picsum.photos/id/67/200')
    }
    ngOnInit() {
        if ("ngTodoData" in localStorage) {
            let temp: any = localStorage.getItem('ngTodoData');
            this.todoData=JSON.parse(temp );
        }
        setInterval(() => {
            if (this.isDocChange) {
                //saave
                localStorage.setItem('ngTodoData', JSON.stringify(this.todoData));
                console.log('saved!');
                this.isDocChange = false;
            }
        }, 5000);

    }
}
