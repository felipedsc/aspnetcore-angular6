using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyWebApp.AcessoDados.Entidades;

namespace MyWebApp.AcessoDados
{
    public class ProdutoRepository : IProdutoRepository
    {
        private readonly MyWebAppContext _myWebAppContext;

        public ProdutoRepository(MyWebAppContext myWebAppContext)
        {
            _myWebAppContext = myWebAppContext;
        }

        public Produto GetById(long id)
        {
            return _myWebAppContext.Produtos.First(x => x.Id == id);
        }

        public List<Produto> ListarProdutos()
        {
            return _myWebAppContext.Produtos.ToList();
        }

        public async Task Salvar(Produto produto)
        {
            await _myWebAppContext.Produtos.AddAsync(produto);
            await _myWebAppContext.SaveChangesAsync();
        }
    }
}
