import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './new-component.component.html'
})
export class NewComponentComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    onLoad(event) { }
    onError(event) { }
}
