using TravelBookingAPI.Data;
using TravelBookingAPI.Models;

namespace TravelBookingAPI.GraphQL;

public class Mutation
{
    public async Task<Destination> AddDestination(
        [Service] TravelDbContext db,
        string name, string location, float price, string imageUrl)
    {
        var newDestination = new Destination
        {
            Name = name,
            Location = location,
            Price = (decimal)price,
            ImageUrl = imageUrl
        };

        db.Destinations.Add(newDestination);
        await db.SaveChangesAsync();
        return newDestination;
    }
}