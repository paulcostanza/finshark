using System.ComponentModel.DataAnnotations.Schema;

namespace finshark.Models
{
    [Table("Portfolios")]
    // Out join table for user and stock
    public class Portfolio
    {
        public string UserId { get; set; }
        public int StockId { get; set; }
        // navigation properties, User and Stock
        public User User { get; set; }
        public Stock Stock { get; set; }
    }
}
