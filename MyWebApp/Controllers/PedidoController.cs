using Microsoft.AspNetCore.Mvc;
using MyWebApp.AcessoDados;
using MyWebApp.AcessoDados.Entidades;
using System;

namespace MyWebApp.Controllers
{
    [Route("api/[controller]")]
    public class PedidoController : Controller
    {
        private IPedidoRepository _repository;

        public PedidoController(IPedidoRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_repository.ListarPedidos());
            }
            catch (Exception ex)
            {
                return BadRequest("Erro: " + ex.Message);
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]Pedido data)
        {
            try
            {
                if (ModelState.IsValid)
                    _repository.Salvar(data);

                return Created("api/pedido", data);
            }
            catch (Exception ex)
            {
                return BadRequest("Erro: " + ex.Message);
            }
        }
    }
}
