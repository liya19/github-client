import React from "react";
import gql from "graphql-tag";
import {Mutation} from "react-apollo";
import {Icon} from "@material-ui/core";

export const FOLLOW = gql`
  mutation($id: ID!) {
    followUser(input: { userId: $id }) {
        user  {
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
  }
`;


const Follow = ({node}) => {
    const {id} = node;
    return <Mutation mutation={FOLLOW} variables={{id}}>
        {followUser => (
            <Icon color="action"
                  onClick={followUser}>
                favorite
            </Icon>
        )}
    </Mutation>
};
export default Follow;