import { Component, Input } from '@angular/core';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-ftree',
  templateUrl: './ftree.component.html',
  styleUrls: ['./ftree.component.css']
})
export class FtreeComponent {
  // abba maulana didi1 didi2 ashraf sanjida
  root=["Kailu Mia"]
  persons = [
    {
      tl: 1,
      ti: 0,
      name: 'Mubarak Ansari',
      pname: 'Lukman Ansari'
    },
    {
      tl: 1,
      ti: 0,
      name: 'Mubarak Ansari',
      pname: 'Lukman Ansari'
    },
    {
      tl: 2,
      ti: 2,
      name: 'Kaif Raza',
      pname: 'Mubarak Ansari'
    },
    {
      tl: 1,
      ti: 1,
      name: 'Jasir Uddin',
      pname: 'Lukman Ansari'
    },
    {
      tl: 2,
      ti: 0,
      name: 'Mudassir Husain',
      pname: 'Jasir Uddin'
    },
   
    {
      tl: 1,
      ti: 4,
      name: 'Ashraf Ansari',
      pname: 'Lukman Ansari'
    },
    {
      tl: 2,
      ti: 0,
      name: 'Owais Raza',
      pname: 'Ashraf Ansari'
    },
    {
      tl: 2,
      ti: 0,
      name: 'Owais Raza',
      pname: 'Ashraf Ansari'
    },
 
    {
      tl: 0,
      ti: 0,
      name: 'Lukman Ansari',
      pname: 'Kailu Mia'
    },
  
  ]
  addNewPerson(name: string, pname: string) {
    const idx = this.persons.findIndex((person) => person.name == pname || person.pname == pname );
    if (idx != -1) {
      this.persons.push({
        tl: this.persons[idx].tl + 1,
        ti: this.persons[idx].ti + 1,
        name,
        pname
      })
    }
    else{
      this.persons.push({
        tl: 0,
        ti:0,
        name,
        pname
      })
      this.root.push(pname)
    }
    this.solve();
  }
  displayarr: any = []
  data: any = []
  ngOnInit() {
    this.solve();
  }
  solve(){
    this.data=this.root.map((item)=>{
      return {name:item,child:this.getChildren(this.persons, item)}
    })
  }
  getChildren(child: any, f: any = "unknown") {
    let sons = child.filter((person: any) => {
      //console.log(person)
      return person.pname == f
    })
    //console.log(sons)
    let newson: any = []
    for (let i = 0; i < sons.length; i++) {
      let temp1 = this.getChildren(child, sons[i].name)
      newson.push({ name: sons[i].name, child: temp1 });
    }
    return newson;

  }

}
@Component({
  selector: 'app-fchild',
  templateUrl: './fchild.component.html',
  styleUrls: ['./ftree.component.css']
})
export class FchildComponent {
  @Input() child: any = []
  @Input() actualname: any = ""
}