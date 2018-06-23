namespace MyWebApp.AcessoDados.Entidades
{
    public class ItemPedido
    {
        public long Id { get; set; }
        public Produto Produto { get; set; }
        public decimal Quantidade { get; set; }
    }
}
