import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { DisplayItem } from './components/app.displayItem';
import { DisplayArray } from './components/app.displayArray';

@NgModule({
    imports: [
        BrowserModule
    ],

    declarations: [
        AppComponent,
        DisplayItem,
        DisplayArray
    ],
    
    bootstrap: [
        AppComponent,
        DisplayItem,
        DisplayArray
    ]
})

export class AppModule { }
