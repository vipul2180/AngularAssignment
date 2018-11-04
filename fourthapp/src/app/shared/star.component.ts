import { Component, Input, OnChanges,
        Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    onStar(): void {
        this.ratingClicked.emit(`The rating clicked is ${this.rating}`);
    }

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

}



/*
function add(a,b){
    return a+b
}


var sum = add(1,2)


var a = 10

var b = "my age is "+a
var b = `my age is ${a}`
*/

