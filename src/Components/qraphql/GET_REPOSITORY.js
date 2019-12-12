import gql from "graphql-tag";

export const GET_REPOSITORY = gql`
query($login: String!, $repo: String!) {
  repositoryOwner(login: $login) {
    repositories {
      totalCount
    }
    repository(name: $repo) {
      id
      name
      createdAt 
      isArchived
      isPrivate
      url
      owner{
       id
       login
        }
      description
      issues {
        totalCount
      }
      stargazers {
        totalCount
      }
      watchers {
        totalCount
      }
      forks{
      totalCount
      }
       commitComments(first: 70) {
          totalCount
          edges{
            node{
                bodyText
                createdAt
            }
          }
      }
      milestones(first:10) {
        edges {
          node {
            title
          }
        }
      }
    }
  }
}
`;
