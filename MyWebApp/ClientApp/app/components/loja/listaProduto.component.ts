import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/dataService";

@Component({
    selector: "lista-produto",
    templateUrl: "listaProduto.component.html",
    styleUrls: []
})

export class ListaProduto implements OnInit {
    public produtos = [];

    constructor(private data: DataService) {

    }

    ngOnInit(): void {
        this.data.carregarProdutos()
            .subscribe(success => {
                if (success)
                    this.produtos = this.data.produtos;
            });
    }

}