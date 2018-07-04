import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/dataService";

@Component({
    selector: "efetivar-compra",
    templateUrl: "efetivarCompra.component.html",
    styleUrls: []
})

export class EfetivarCompra implements OnInit {
    constructor(private data: DataService) {

    }

    ngOnInit() {

    }

    onEfetivarCompra() {
        alert('Efetivar Compra');
    }
}