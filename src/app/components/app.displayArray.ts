import { Component } from '@angular/core';
import { Person } from '../models/app.model.person';

@Component({
    selector: 'display-array',
    template: `
        <ul>
            <li *ngFor = "let item of _persons">
                {{item.name}}
            </li>
        </ul>
    `
})

export class DisplayArray {
    public items: Array<string>;
    private _persons: Array<Person> = [];

    constructor () {
        // this._persons = [];
        this._persons.push(new Person('Golf'));
        this._persons.push(new Person('Steve'));

        console.log(this._persons);
        console.log(JSON.stringify(this._persons));
    }
}