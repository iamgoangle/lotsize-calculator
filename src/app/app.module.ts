import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { DisplayItem } from './components/app.displayItem';
import { DisplayArray } from './components/app.displayArray';
import { EventBinding } from './components/app.eventBinding';

@NgModule({
    imports: [
        BrowserModule
    ],

    declarations: [
        AppComponent,
        DisplayItem,
        DisplayArray,
        EventBinding
    ],
    
    bootstrap: [
        AppComponent,
        DisplayItem,
        DisplayArray,
        EventBinding
    ]
})

export class AppModule { }
