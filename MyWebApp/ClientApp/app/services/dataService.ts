import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/internal/Observable";
import { Pedido } from "../models/pedido";
import { Produto } from "../models/produto";
import { ItemPedido } from "../models/item-pedido";

@Injectable()
export class DataService {
    public produtos: Produto[];
    public pedido: Pedido = new Pedido();

    constructor(private http: Http) {

    }

    public carregarProdutos(): Observable<Produto[]> {
        return this.http.get("api/produto")
            .map((result: Response) => this.produtos = result.json());
    }

    public adicionarProduto(produto: Produto) {
        let itemExistente = this.pedido.itensPedido.find(x => x.produto.id == produto.id);

        if (itemExistente != undefined) {
            itemExistente.quantidade++;
        } else {
            let item: ItemPedido;
            item = new ItemPedido();

            item.produto.id = produto.id;
            item.produto.nome = produto.nome;
            item.produto.descricao = produto.descricao;
            item.produto.preco = produto.preco;

            this.pedido.itensPedido.push(item);
        }
    }
}