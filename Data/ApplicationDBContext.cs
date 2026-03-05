using finshark.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace finshark.Data
{
    public class ApplicationDBContext : IdentityDbContext<User>
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> dbContextOptions)
            : base(dbContextOptions) // base passes up our db into DbContext
        {
        }

        public DbSet<Stock> Stocks { get; set; } // watch out for deferred execution

        public DbSet<Comment> Comments { get; set; }
    }
}