import {Query} from "react-apollo";
import React from "react";
import {GET_LOGIN, GET_USER} from '../App';
import Repositories from "../RepositoriesList/Repositories";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const UserRepositories = ({login}) => {
    return (
        <Query query={GET_USER} variables={{login}}>
            {({data: {user}, loading}) => {
                if (loading || !user) {
                    return <div style={{position: 'fixed', top: '50%', left: '50%'}}>

                    </div>
                }
                return (
                    <Paper>
                        <Repositories repositories={user.repositories} style ={{

                        }}/>
                    </Paper>
                );
            }}
        </Query>
    )
};


const Profile = () => {
    return <Query query={GET_LOGIN}>
        {({data: {viewer}, loading}) => {
            if (loading || !viewer) {
                console.log(viewer);
                return <div style={{
                    width: '213',
                    height: '213',
                    position: 'absolute', left: '43%', top: '35%'

                }}>
                </div>
            }

            return (
                <div>
                    <Paper style={{
                        width: '300px',
                        height: '400px',
                        marginTop: '20px',
                        marginLeft: '30px'
                    }}>
                        <Typography variant="h5" component="h3">
                            {viewer.name}
                        </Typography>
                        <Typography component="p">
                            {viewer.login}
                        </Typography>
                    </Paper>
                    <UserRepositories login={viewer.login}/>
                </div>
            );
        }}
    </Query>
};



export default Profile;


