import {Mutation} from "react-apollo";
import React from "react";
import {Icon} from "@material-ui/core";
import {UNSTAR_REPOSITORY} from '../App';

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