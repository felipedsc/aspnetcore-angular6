import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { ListaProduto } from './components/lista-produto/listaProduto.component';
import { Carrinho } from './components/carrinho/carrinho.component';
import { DataService } from './services/dataService';
import { Loja } from './components/loja/loja.component';
import { EfetivarCompra } from './components/efetivar-compra/efetivarCompra.component';

let routes = [
    { path: "", component: Loja },
    { path: "efetivarCompra", component: EfetivarCompra }
];

@NgModule({
    declarations: [
        AppComponent,
        ListaProduto,
        Carrinho,
        Loja,
        EfetivarCompra
    ],
    imports: [
        BrowserModule,
        HttpModule,
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        ModalModule.forRoot(),
        RouterModule.forRoot(routes, {
            useHash: true,
            enableTracing: false
        })
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
