import {Mutation} from "react-apollo";
import React from "react";
import {Icon} from "@material-ui/core";
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
const UnStar = ({node}) => {
    const {id} = node;
    return <Mutation mutation={UNSTAR_REPOSITORY} variables={{id}}>
        {unStarRepository => (
            <Icon color="secondary"
                  onClick={unStarRepository}>
                favorite
            </Icon>
        )}
    </Mutation>
};
export default UnStar;