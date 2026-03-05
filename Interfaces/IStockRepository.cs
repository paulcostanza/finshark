using finshark.Dtos.Stock;
using finshark.Models;

namespace finshark.Interfaces
{
    public interface IStockRepository
    {
        // interfaces allow us to plug in this code into other places,
        // which allow us to abstract our code away
        Task<List<Stock>> GetAllAsync();
        Task<Stock?> GetByIdAsync(int id); // FirstOrDefault can be NULL
        Task<Stock> CreateAsync(Stock stockModel);
        Task<Stock?> UpdateAsync(int id, UpdateStockRequestDto stockDto);
        Task<Stock?> DeleteAsync(int id);
        Task<bool> StockExists(int id);
    }
}
