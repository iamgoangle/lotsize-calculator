import { Component } from '@angular/core';

@Component({
    selector: 'display-item',
    template: `
        <h1>{{title}}</h1>
        <h2>{{itemDescription}}</h2>
    `
})

export class DisplayItem {
    title: string;
    itemDescription: string;

    constructor () {
        this.title = 'Title of golf item';
        this.itemDescription = 'Item description';
    }
}