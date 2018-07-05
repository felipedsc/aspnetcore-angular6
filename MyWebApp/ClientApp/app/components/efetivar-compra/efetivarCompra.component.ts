import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../../services/dataService";

@Component({
    selector: "efetivar-compra",
    templateUrl: "efetivarCompra.component.html",
    styleUrls: []
})

export class EfetivarCompra {
    private mensagem: string;

    constructor(private data: DataService,
        public router: Router) {

    }

    onEfetivarCompra() {
        debugger;
        this.data.comprar()
            .subscribe(success => {
                if (success) {
                    this.router.navigate([""]);
                    this.mensagem = null;
                }
            }, error => this.mensagem = "Falha ao salvar pedido");
    }
}