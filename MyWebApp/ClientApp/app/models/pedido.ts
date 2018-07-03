import { ItemPedido } from "./item-pedido";
import * as _ from "lodash";

export class Pedido {
    id: number;
    dataPedido: Date;
    itensPedido: Array<ItemPedido> = new Array<ItemPedido>();
    get total(): number {
        return _.sum(_.map(this.itensPedido, i => i.produto.preco * i.quantidade));
    };
}
