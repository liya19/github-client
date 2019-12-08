import React from "react";
import gql from "graphql-tag";
import {Mutation} from "react-apollo";
import Button from "@material-ui/core/Button";

export const FOLLOW = gql`
  mutation($id: ID!) {
    followUser(input: { userId: $id }) {
        user  {
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


const Follow = ({node}) => {
    const {id} = node;
    return <Mutation mutation={FOLLOW} variables={{id}}>
        {followUser => (
            <Button color="action"
                  onClick={followUser}>
                Follow
            </Button>
        )}
    </Mutation>
};
export default Follow;