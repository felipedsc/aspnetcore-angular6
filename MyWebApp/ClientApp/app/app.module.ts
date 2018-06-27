import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListaProduto } from './components/loja/listaProduto.component';
import { DataService } from './services/dataService';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
    declarations: [
        AppComponent,
        ListaProduto
    ],
    imports: [
        BrowserModule,
        HttpModule,
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        ModalModule.forRoot()
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
