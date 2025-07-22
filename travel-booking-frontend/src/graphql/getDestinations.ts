import { gql } from 'graphql-request';

export const GET_DESTINATIONS = gql`
  query {
    destinations {
      id
      name
      location
      price
      imageUrl
    }
  }
`;
