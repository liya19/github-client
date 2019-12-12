import gql from "graphql-tag";

export const GET_LOGIN = gql`
   {
      viewer {
        login
        name
        avatarUrl
        url
        bio
        repositories(first: 20) {
        edges {
          node {
            id
            name
            url
            viewerHasStarred
             stargazers{
            totalCount
            }
          }
        }
      }
      }
    }
`;
