using Microsoft.EntityFrameworkCore;
using MyWebApp.AcessoDados.Entidades;
using System.Collections.Generic;
using System.Linq;

namespace MyWebApp.AcessoDados
{
    public class PedidoRepository : IPedidoRepository
    {
        private MyWebAppContext _context;
        public IProdutoRepository _produtoRepository { get; set; }
        public PedidoRepository(MyWebAppContext context, IProdutoRepository produtoRepository)
        {
            _context = context;
            _produtoRepository = produtoRepository;
        }

        public List<Pedido> ListarPedidos()
        {
            return _context.Pedidos
                .Include(p => p.ItensPedido)
                    .ThenInclude(item => item.Produto)
                .ToList();
        }

        public void Salvar(Pedido data)
        {
            foreach (var item in data.ItensPedido) item.Produto = _produtoRepository.GetById(item.Produto.Id);

            _context.Pedidos.Add(data);
            _context.SaveChanges();
        }
    }
}