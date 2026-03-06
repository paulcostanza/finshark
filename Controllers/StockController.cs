using finshark.Data;
using finshark.Mappers;
using finshark.Dtos.Stock;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using finshark.Interfaces;
using finshark.Helpers;
using Microsoft.AspNetCore.Authorization;

namespace finshark.Controllers
{
    [Route("api/stock")]
    [ApiController]
    public class StockController : Controller
    {
        private readonly ApplicationDBContext _context;
        private readonly IStockRepository _stockRepo;
        public StockController(ApplicationDBContext context, IStockRepository stockRepo)
        {
            _stockRepo = stockRepo;
            _context = context;
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetAll([FromQuery] QueryObject query)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var stocks = await _stockRepo.GetAllAsync(query);

            var stockDto = stocks.Select(s => s.ToStockDto()); // ToList is needed to avoid deferred execution

            return Ok(stocks);
        }

        [HttpGet("{id:int}")] // model binding - we want to bind the id from the route to our parameter
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var stock = await _stockRepo.GetByIdAsync(id);

            if (stock == null)
            {
                return NotFound();
            }

            return Ok(stock.ToStockDto());
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateStockRequestDto stockDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var stockModel = stockDto.ToStockFromCreateDto();
            await _stockRepo.CreateAsync(stockModel);

            return CreatedAtAction(nameof(GetById), new { id = stockModel.Id }, stockModel.ToStockDto());
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateStockRequestDto updateDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var stockModel = await _stockRepo.UpdateAsync(id, updateDto);

            if (stockModel == null)
            {
               return NotFound();
            }

            return Ok(stockModel.ToStockDto());
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var stockModel = await _stockRepo.DeleteAsync(id);

            if (stockModel == null)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}
