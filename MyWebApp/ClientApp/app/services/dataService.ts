import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { Produto } from "../model/produto";
import "rxjs/add/operator/map";

@Injectable()
export class DataService {
    public produtos: Produto[] = [];

    constructor(private http: HttpClient) {

    }

    carregarProdutos() {
        return this.http.get("api/produto")
            .map((data: Produto[]) => {
                this.produtos = data;
                return true;
            });
    }
}