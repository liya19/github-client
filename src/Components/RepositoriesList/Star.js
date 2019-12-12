import {Mutation} from "react-apollo";
import React from "react";
import {Icon} from "@material-ui/core";
import {STAR_REPOSITORY} from "../qraphql/STAR_REPOSITORY";

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