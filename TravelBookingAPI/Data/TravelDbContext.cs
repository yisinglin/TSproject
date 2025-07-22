using Microsoft.EntityFrameworkCore;
using TravelBookingAPI.Models;

namespace TravelBookingAPI.Data
{
    public class TravelDbContext : DbContext
    {
        public TravelDbContext(DbContextOptions<TravelDbContext> options)
            : base(options) { }

        public DbSet<Destination> Destinations { get; set; }
    }
}
