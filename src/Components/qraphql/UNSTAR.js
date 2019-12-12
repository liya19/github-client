import gql from "graphql-tag";

export const UNSTAR_REPOSITORY = gql`
  mutation($id: ID!) {
    removeStar(input: { starrableId: $id }) {
      starrable {
        id
        viewerHasStarred
         stargazers{
            totalCount
            }
      }
    }
  }
`;