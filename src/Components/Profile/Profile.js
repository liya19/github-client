import {Query} from "react-apollo";
import React from "react";
import {GET_LOGIN} from '../App';
import Repositories from "../RepositoriesList/Repositories";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Loading from "../Loading";


const Profile = () => {
    return <Query query={GET_LOGIN}>

        {({data: {viewer}, loading}) => {
            if (loading || !viewer) {
                console.log(viewer);
                return <Loading/>
            }

            return (
                <div>
                    <Paper style={{
                        width: '300px',
                        height: '400px',
                        marginTop: '20px',
                        marginLeft: '30px'
                    }}>
                        <Avatar src={viewer.avatarUrl}
                                variant="rounded"
                                style={{
                                    width: '300px',
                                    height: '340px'
                                }}/>
                        <Typography variant="h5" componxent="h3">
                            {viewer.name}
                        </Typography>
                        <Typography component="p">
                            {viewer.login}
                        </Typography>
                    </Paper>


                    <Paper>
                        <Repositories repositories={viewer.repositories} style ={{
                        }}/>
                    </Paper>
                </div>
            );
        }}
    </Query>
};



export default Profile;


