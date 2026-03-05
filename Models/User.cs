using Microsoft.AspNetCore.Identity;

namespace finshark.Models
{
    public class User: IdentityUser
    {
        public string Name { get; set; } = null!;

    }
}
