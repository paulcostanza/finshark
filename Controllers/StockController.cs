using finshark.Data;
using Microsoft.AspNetCore.Mvc;

namespace finshark.Controllers
{
    [Route("api/stock")]
    [ApiController]
    public class StockController : Controller
    {
        private readonly ApplicationDBContext _context;
        public StockController(ApplicationDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var stocks = _context.Stocks.ToList(); // ToLIst is needed to avoid deferred execution

            return Ok(stocks);
        }

        [HttpGet("{id}")] // model binding - we want to bind the id from the route to our parameter
        public IActionResult GetById([FromRoute] int id)
        {
            var stock = _context.Stocks.Find(id);

            if (stock == null)
            {
                return NotFound();
            }

            return Ok(stock);
        }
    }
}
