import { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import { GET_DESTINATIONS } from './graphql/getDestinations';
import { ADD_DESTINATION } from './graphql/addDestination';

interface Destination {
  id: string;
  name: string;
  location: string;
  price: number;
  imageUrl: string;
}

const endpoint = 'http://localhost:5041/graphql';


function App() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    price: '',
    imageUrl: ''
  });

  useEffect(() => {
    request<{ destinations: any[] }>(endpoint, GET_DESTINATIONS)
      .then((data) =>  
        setDestinations(data.destinations))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await request(endpoint, ADD_DESTINATION, {
        ...formData,
        price: parseFloat(formData.price)
      });

      const data = await request<{ destinations: any[] }>(
        endpoint,
        GET_DESTINATIONS
      );
      
      setDestinations(data.destinations);

      setFormData({ name: '', location: '', price: '', imageUrl: '' });
    } catch (error) {
      console.error('Error adding destination:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">
        Explore Travel Destinations 🌍✈️
      </h1>

      <form onSubmit={handleSubmit} className="mb-6 space-y-2">
        <input className="border p-2 w-full" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input className="border p-2 w-full" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
        <input className="border p-2 w-full" name="price" type="number" placeholder="Price" value={formData.price} onChange={handleChange} required />
        <input className="border p-2 w-full" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} required />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Add Destination</button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {destinations.map((d) => (
          <div key={d.id} className="border rounded-xl shadow p-4">
            <img src={d.imageUrl} alt={d.name} className="rounded-lg mb-3" />
            <h2 className="text-xl font-semibold">{d.name}</h2>
            <p className="text-gray-500">{d.location}</p>
            <p className="text-blue-600 font-bold">${d.price}</p>
          </div>
        ))}
      </div>
    </div>
  );

}

export default App
