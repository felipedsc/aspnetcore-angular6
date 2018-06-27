import { Http, Response } from "@angular/http";
import { Produto } from "../models/produto";
import { Injectable } from "@angular/core"
import { Observable } from "rxjs/internal/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class DataService {
    public produtos: Produto[];

    constructor(private http: Http) {

    }

    public carregarProdutos(): Observable<Produto[]> {
        return this.http.get("api/produto")
            .map((result: Response) => this.produtos = result.json());
    }
}