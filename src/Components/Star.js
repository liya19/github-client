import {Mutation} from "react-apollo";
import React from "react";
import {STAR_REPOSITORY, GET_REPOSITORIES_OF_ORGANIZATION} from './App';

let Star = ({id}) => (
    <Mutation mutation={STAR_REPOSITORY} variables={{id}}>
        {starRepository => (
            <button type="button" onClick={starRepository}>
                Star
            </button>
        )}
    </Mutation>
);
export default Star;