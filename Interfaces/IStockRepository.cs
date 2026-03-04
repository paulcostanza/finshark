using finshark.Models;

namespace finshark.Interfaces
{
    public interface IStockRepository
    {
        // interfaces allow us to plug in this code into other places,
        // which allow us to abstract our code away
        Task<List<Stock>> GetAllAsync();
    }
}
