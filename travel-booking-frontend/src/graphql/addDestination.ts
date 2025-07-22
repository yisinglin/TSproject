import { gql } from 'graphql-request';

export const ADD_DESTINATION = gql`
  mutation AddDestination($name: String!, $location: String!, $price: Float!, $imageUrl: String!) {
    addDestination(name: $name, location: $location, price: $price, imageUrl: $imageUrl) {
      id
      name
      location
      price
      imageUrl
    }
  }
`;
