using System;
using System.Collections.Generic;

namespace MyWebApp.AcessoDados.Entidades
{
    public class Pedido
    {
        public long Id { get; set; }
        public DateTime DataPedido { get; set; }
        public ICollection<ItemPedido> ItensPedido { get; set; }
    }
}
