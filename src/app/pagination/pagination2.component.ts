import { Component } from "@angular/core";

@Component(
    {
        selector: 'app-pagination2',
        templateUrl: './pagination2.component.html',
        styleUrls: []
    }
)
export class Pagination2 {
    //items:any=['Hello','World']
    loadMoreItems() {
        console.log('Load More')
    }
    items = ['Hello', 'World', 'India', 'Saudi','Emirate', 'Africa', 'Canada', 'Austria', 'America']
    //pages=[1,2,3]


    itemsPerPage = 3;
    currentPage = 0;
    totalItems = 9;
    marginLeft=12.5;
    offSet=14;
    onPageChanged(idx: number) {
        (this.currentPage<idx)?this.marginLeft-=this.offSet:this.marginLeft+=this.offSet;
        this.currentPage = idx;
        //console.log('Page Change', idx, this.currentPage)
    }
    leftPage() {
        if (this.currentPage > 0)
        {
            this.currentPage -= 1
            this.marginLeft+=this.offSet;
        }
        //console.log(this.marginLeft)
    }
    rightPage() {
        if (this.currentPage < Math.ceil(this.totalItems/this.itemsPerPage) - 1)
        {this.currentPage += 1
            this.marginLeft-=this.offSet;
        }
        //console.log(this.marginLeft)
       // console.log(this.currentPage)
    }
}