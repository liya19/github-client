import React from "react";
import {Mutation} from "react-apollo";
import Button from "@material-ui/core/Button";
import {UN_FOLLOW} from "../qraphql/UNFOLLOW";


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