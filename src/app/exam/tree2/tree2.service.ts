import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class Tree2Service {
    persons =
        [{
            id: 3801,
            name: 'Lukman Ansari',
            pname: 'Kailu Mia',
            child: [
                {
                    id: 6668,
                    name: 'Mubarak Ansari',
                    pname: 'Lukman Ansari',
                    child: [
                        {
                            id: 9081,
                            name: 'Kaif Raza',
                            pname: 'Mubarak Ansari',
                            child: []
                        }
                    ]
                },
                {
                    id: 1673,
                    name: 'Jasir Uddin',
                    pname: 'Lukman Ansari',
                    child: [{
                        id: 1609,
                        name: 'Mudassir Husain',
                        pname: 'Jasir Uddin',
                        child: []
                    }]
                },
                {
                    id: 1677,
                    name: 'Ashraf Ansari',
                    pname: 'Lukman Ansari',
                    child: [
                        {
                            id: 1619,
                            name: 'Md Owais',
                            pname: 'Ashraf Ansari',
                            child: []
                        },
                        {
                            id: 1619,
                            name: 'Md Owaid',
                            pname: 'Ashraf Ansari',
                            child: []
                        }
                    ]
                }
            ]
        }]
    private addNewItemHelp(oldId: any, oldName: string, oldPname: string, id: any, name: string, items: any) {
        let temp: any[] = []
        console.log(oldId,oldName,items)
        for (let i = 0; i < items.length; i++) {
            if (items[i].id === id) {
                temp.push({
                    id: items[i].id,
                    name: items[i].name,
                    pname: items[i].pname,
                    child: [...items[i].child, {
                        id: new Date().getTime()%10000,
                        name: name,
                        pname: items[i].name,
                        child: []
                    }]
                })
                temp=[...temp,...items.slice(i+1)]
                break;
            }
            else
                temp.push(this.addNewItemHelp(items[i].id, items[i].name, items[i].pname, id, name, items[i].child));
        };
        return {
            id: oldId,
            name: oldName,
            pname: oldPname,
            child: temp
        };
    }
    addNewItem(id: any, name: string) {
        let rootIdx = 0;
       let temp = this.addNewItemHelp(null, '', '', id, name, this.persons)
        this.persons[rootIdx]=temp.child[rootIdx] //just for force render
        console.log(temp)
    }
}