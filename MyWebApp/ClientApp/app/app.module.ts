import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListaProduto } from './components/loja/listaProduto.component';
import { DataService } from './services/dataService';

@NgModule({
    declarations: [
        AppComponent,
        ListaProduto
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
