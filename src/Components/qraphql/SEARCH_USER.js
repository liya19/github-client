import gql from "graphql-tag";

export const SEARCH_USER = gql`
query($queryString: String!) {
  search(query: $queryString, type: USER, first: 10) {
    edges {
      node {
        ... on User {
        id
          name
         login
         url
         bio
         avatarUrl
          }
      }
    }
  }
}
`;