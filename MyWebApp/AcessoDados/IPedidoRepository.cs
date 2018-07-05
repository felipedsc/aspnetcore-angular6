using MyWebApp.AcessoDados.Entidades;
using System.Collections.Generic;

namespace MyWebApp.AcessoDados
{
    public interface IPedidoRepository
    {
        List<Pedido> ListarPedidos();
        void Salvar(Pedido data);
    }
}
