import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/dataService";

@Component({
    selector: "carrinho",
    templateUrl: "carrinho.component.html",
    styleUrls: []
})

export class Carrinho implements OnInit {
    constructor(private data: DataService) { }

    ngOnInit(): void {
    }
}