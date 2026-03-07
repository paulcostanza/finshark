using finshark.Dtos.Stock;
using finshark.Interfaces;
using finshark.Mappers;
using finshark.Models;
using Newtonsoft.Json;

namespace finshark.Service
{
    public class FMPService : IFMPService
    {
        private HttpClient _httpClient;
        private IConfiguration _config;
        public FMPService(HttpClient httpClient, IConfiguration config) 
        {
            _httpClient = httpClient;
            _config = config;
        }
        public async Task<Stock> FindStockBySymbolAsync(string symbol)
        {
            try
            {
                var result = await _httpClient.GetAsync(
                    $"https://financialmodelingprep.com/api/v3/profile/{symbol}?apikey={_config["FMPKey"]}");

                if (!result.IsSuccessStatusCode)
                    return null;

                var content = await result.Content.ReadAsStringAsync();

                var stocks = JsonConvert.DeserializeObject<FMPStock[]>(content);

                if (stocks == null || stocks.Length == 0)
                    return null;

                return stocks[0].ToStockFromFMP();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching stock data: {ex.Message}");
                throw;
            }
        }
    }
}
