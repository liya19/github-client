import {Query} from "react-apollo";
import React from "react";
import {useParams} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Loading from "../Loading";
import RepositoryList from "../RepositoriesList/RepositoryList";
import Follow from "../Follow/Follow";
import Unfollow from "../Follow/UnFollow";
import {GET_USER} from "../qraphql/GET_USER";

const User = () => {
    let {id} = useParams();
    return <Query query={GET_USER} variables={{id: id}}>
        {({data: {node}, loading}) => {
            if (loading || !node) {
                return <Loading/>
            }

            return (
                <div>
                    <Paper style={{
                        width: '300px',
                        height: '430px',
                        marginTop: '20px',
                        marginLeft: '30px'
                    }}>
                        <Avatar src={node.avatarUrl}
                                variant="rounded"
                                style={{
                                    width: '300px',
                                    height: '340px'
                                }}/>
                        <Typography variant="h5" componxent="h3">
                            {node.name}
                        </Typography>
                        <Typography component="p">
                            {node.login}
                        </Typography>
                        <Typography>
                            {node.viewerIsFollowing ? (<Unfollow node={node}/>) : (<Follow node={node}/>)}
                        </Typography>
                    </Paper>
                    <Paper>
                        <Paper>
                            <RepositoryList data={node.repositories}/>
                        </Paper>
                    </Paper>
                </div>
            );
        }
        }
    </Query>

};

export default User;


