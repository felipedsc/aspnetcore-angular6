import { Component } from "@angular/core";

@Component({
    selector: "lista-produto",
    templateUrl: "listaProduto.component.html",
    styleUrls: []
})

export class ListaProduto {
    public produtos = [
        {
            titulo: "Primeiro Produto",
            preco: 10
        }, {
            titulo: "Segundo Produto",
            preco: 20.26
        }, {
            titulo: "Terceiro Produto",
            preco: 60.11
        }
    ];
}