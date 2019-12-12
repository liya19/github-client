import gql from "graphql-tag";

export const UN_FOLLOW = gql`
  mutation($id: ID!) {
    unfollowUser(input: { userId: $id }) {
        user  {
        id
        login
        name
        avatarUrl
        url
        bio     
         viewerIsFollowing        
    }
    }
  }
`;
