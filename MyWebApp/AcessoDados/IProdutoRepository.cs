using System.Collections.Generic;
using System.Threading.Tasks;
using MyWebApp.AcessoDados.Entidades;

namespace MyWebApp.AcessoDados
{
    public interface IProdutoRepository
    {
        List<Produto> ListarProdutos();
        Produto GetById(long id);
        Task Salvar(Produto produto);
    }
}