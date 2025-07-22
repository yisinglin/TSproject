using TravelBookingAPI.Models;

namespace TravelBookingAPI.Data;

public static class DestinationStore
{
    public static List<Destination> Destinations { get; } = new List<Destination>
    {
        new Destination
        {
            Id = 1,
            Name = "Paris",
            Location = "France",
            Price = 1500.00M,
            ImageUrl = "https://example.com/images/paris.jpg"
        },
        new Destination
        {
            Id = 2,
            Name = "Tokyo",
            Location = "Japan",
            Price = 2000.00M,
            ImageUrl = "https://example.com/images/tokyo.jpg"
        },
        new Destination
        {
            Id = 3,
            Name = "New York",
            Location = "USA",
            Price = 1800.00M,
            ImageUrl = "https://example.com/images/newyork.jpg"
        }
    };

    public static int NextId => Destinations.Count > 0 ? Destinations.Max(d => d.Id) + 1 : 1;
}