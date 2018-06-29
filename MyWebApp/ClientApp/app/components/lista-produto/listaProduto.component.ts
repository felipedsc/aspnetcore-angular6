import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/dataService";
import { Produto } from "../../models/produto";

@Component({
    selector: "lista-produto",
    templateUrl: "./listaProduto.component.html",
    styleUrls: ["listaProduto.component.css"]
})

export class ListaProduto implements OnInit {
    public produtos: Produto[];

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.dataService.carregarProdutos()
            .subscribe(() => { this.produtos = this.dataService.produtos; });
    }

}