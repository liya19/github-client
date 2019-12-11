import {Mutation} from "react-apollo";
import React from "react";
import {Icon} from "@material-ui/core";
import gql from "graphql-tag";

export const STAR_REPOSITORY = gql`
  mutation($id: ID!) {
    addStar(input: { starrableId: $id }) {
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

const Star = ({node}) => {
    const {id} = node;
    return <Mutation mutation={STAR_REPOSITORY} variables={{id}}>
        {starRepository => (
            <Icon color="action"
                  onClick={starRepository}>
                favorite
            </Icon>
        )}
    </Mutation>
};
export default Star;