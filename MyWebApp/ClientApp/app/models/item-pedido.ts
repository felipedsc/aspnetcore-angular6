import { Produto } from "./produto";

export class ItemPedido {
    public id: number;
    public produto: Produto;
    public quantidade: number;

    constructor() {
        this.produto = new Produto();
    }
}