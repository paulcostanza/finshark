using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace finshark.Models
{
    [Table("Users")]
    public class User: IdentityUser
    {
        public string Name { get; set; } = null!;
        public List<Portfolio> Portfolio { get; set; } = new List<Portfolio>();

    }
}
