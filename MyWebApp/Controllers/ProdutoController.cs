using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyWebApp.AcessoDados;
using MyWebApp.AcessoDados.Entidades;

namespace MyWebApp.Controllers
{
    [Route("api/[controller]")]
    public class ProdutoController : Controller
    {
        private readonly IProdutoRepository _repository;
        public ProdutoController(IProdutoRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_repository.ListarProdutos());
            }
            catch (Exception ex)
            {
                return BadRequest("Erro: " + ex.Message);
            }
        }

        [HttpGet, Route("{id:long}")]
        public IActionResult Get(long id)
        {
            try
            {
                return Ok(_repository.GetById(id));
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Produto produto)
        {
            try
            {
                await _repository.Salvar(produto);

                return Created("api/produto", produto);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }
    }
}
