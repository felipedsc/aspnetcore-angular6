using MyWebApp.AcessoDados.Entidades;
using System.Collections.Generic;
using System.Linq;

namespace MyWebApp.AcessoDados
{
    public class PedidoRepository : IPedidoRepository
    {
        private MyWebAppContext _context;

        public PedidoRepository(MyWebAppContext context)
        {
            _context = context;
        }

        public List<Pedido> ListarPedidos()
        {
            return _context.Pedidos.ToList();
        }

        public void Salvar(Pedido data)
        {
            _context.Pedidos.Add(data);
            _context.SaveChanges();
        }
    }
}