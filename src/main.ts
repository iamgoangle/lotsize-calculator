import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

if (process.env.ENV === 'production') {
    enableProdMode();
}

/*
    Launch an application by bootstrapping its root module. 
    During development you're likely to bootstrap the AppModule in a main.ts file like this one.

    Just-in-Time (JIT) compiler
    http://stackoverflow.com/questions/95635/what-does-a-just-in-time-jit-compiler-do
*/

platformBrowserDynamic().bootstrapModule(AppModule);
