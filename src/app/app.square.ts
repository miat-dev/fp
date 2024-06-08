import {Pipe,PipeTransform} from '@angular/core'
@Pipe({
    name:'square'
})
export class SquarePipe implements PipeTransform{
    transform(val: number):number {
            return val*val;
    }
}