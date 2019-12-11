import React from "react";
import gql from "graphql-tag";
import {Mutation} from "react-apollo";
import Button from "@material-ui/core/Button";

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


const Unfollow = ({node}) => {
    const {id} = node;
    return <Mutation mutation={UN_FOLLOW} variables={{id}}>
        {unfollowUser => (
            <Button color="action"
                  onClick={unfollowUser}
                    style={{
                        width:300,
                        backgroundColor: '#C0C0C0'
                    }}
            >
                Unfollow
            </Button>
        )}
    </Mutation>
};
export default Unfollow;