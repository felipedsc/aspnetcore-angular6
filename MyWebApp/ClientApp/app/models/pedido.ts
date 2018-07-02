import { ItemPedido } from "./item-pedido";

export class Pedido {
    id: number;
    dataPedido: Date;
    itensPedido: Array<ItemPedido> = new Array <ItemPedido>();
}
