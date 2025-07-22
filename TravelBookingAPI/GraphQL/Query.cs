using TravelBookingAPI.Data;
using TravelBookingAPI.Models;

namespace TravelBookingAPI.GraphQL;


public class Query
{
    public IQueryable<Destination> GetDestinations([Service] TravelDbContext db) =>
        db.Destinations;
}
