import React from "react";
import {Mutation} from "react-apollo";
import Button from "@material-ui/core/Button";
import {FOLLOW} from "../qraphql/FOLLOW";

const Follow = ({node}) => {
    const {id} = node;
    return <Mutation mutation={FOLLOW} variables={{id}}>
        {followUser => (
            <Button color="action"
                    onClick={followUser}
                    style={{
                        width:300,
                        backgroundColor: '#2088ff'
                    }}
            >Follow</Button>
        )}
    </Mutation>
};
export default Follow;