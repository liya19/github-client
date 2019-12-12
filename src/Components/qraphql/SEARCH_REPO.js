import gql from "graphql-tag";

export const SEARCH_REPO = gql`
query($queryString: String!) {
  search(query: $queryString, type: REPOSITORY, first: 10) {
    repositoryCount
    edges {
      node {
        ... on Repository {
        id
          name
          owner{
              id
              login
          }
          descriptionHTML
          viewerHasStarred
          stargazers {
            totalCount
          }
          forks {
            totalCount
          }
          updatedAt
        }
      }
    }
  }
 }
 `;