import gql from "graphql-tag";

export const FOLLOW = gql`
  mutation($id: ID!) {
    followUser(input: { userId: $id }) {
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

