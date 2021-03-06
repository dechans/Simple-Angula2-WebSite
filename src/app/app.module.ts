import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component';
import {HomeComponent} from './components/pages/home.component';
import {AboutComponent} from './components/pages/about.component';
import {routing} from './app.routing';

@NgModule({
    declarations: [
        AppComponent, NavbarComponent, JumbotronComponent, HomeComponent, AboutComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
