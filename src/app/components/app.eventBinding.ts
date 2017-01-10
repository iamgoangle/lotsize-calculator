import { Component } from '@angular/core';

@Component({
    selector: 'click-me',
    template: `
        <div>
            <div>
                <input #newEmp
                (keyup.enter)="onAddNewEmp($event)"
                type="text"
                placeholder="Enter new employee name here..." />

                <button (click)="onAddNewEmp($event)">Add</button>
            </div>

            <div style="margin-top: 20px;">
                <ul>
                    <li *ngFor="let emp of _empDatas">
                        {{emp}}
                    </li>
                </ul>
            </div>
        </div>            
    `
})

export class EventBinding {
    private _clickMessage: string = '';

    private _empDatas: Array<string> = [];
    private _newEmpInput: string = '';

    constructor() {
        // define constructor here
    }

    // event on user click "</button>"
    onHandleClick () {
        this._clickMessage = 'Hello Dude!';
        alert(this._clickMessage);
    }

    onAddNewEmp (event: any) {
        console.log(event.target.value);
        this._newEmpInput = event.target.value;
        if (this._newEmpInput.length > 0) {
            this._empDatas.push(this._newEmpInput);  

            // clear
            event.target.value = '';
        }
    }
}