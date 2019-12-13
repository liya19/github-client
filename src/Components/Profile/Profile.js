import {Query} from "react-apollo";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Loading from "../Loading";
import RepositoryList from "../RepositoriesList/RepositoryList";
import profile from "../../image/profile.jpg";
import SearchIcon from "@material-ui/core/SvgIcon/SvgIcon";
import {GET_LOGIN} from "../qraphql/GET_LOGIN";


const Profile = () => {
    if (localStorage.getItem("token") == null)
        return <div>
            <h2 style={{
                textAlign: 'center',
                fontFamily: ' -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
                fontSize: 35,
                marginLeft: 30,
                fontWeight: 'normal',
                color: '#24292e'
            }}>Please log in <SearchIcon style={{size: 25, color: '#a3aab1'}}/>
            </h2>
            <img src={profile} width={'650'} height={'540'} style={{
                display: 'block',
                margin: '0 auto',
                marginTop: -10
            }} alt={"profilepage"}/>
        </div>
    return <Query query={GET_LOGIN}>

        {({data: {viewer}, loading}) => {
            if (loading || !viewer) {
                return <Loading/>
            }

            return (
                <div>
                    <Paper style={{
                        width: '300px',
                        height: '400px',
                        marginTop: '20px',
                        marginLeft: '100px'
                    }}>
                        <Avatar src={viewer.avatarUrl}
                                variant="rounded"
                                style={{
                                    width: '300px',
                                    height: '340px',
                                }}/>
                        <Typography variant="h5" componxent="h3">
                            {viewer.name}
                        </Typography>
                        <Typography component="p">
                            {viewer.login}
                        </Typography>
                    </Paper>

                    <Paper>
                        <Paper>
                            <RepositoryList data={viewer.repositories}/>
                        </Paper>
                    </Paper>
                </div>
            );
        }}
    </Query>
};

export default Profile;


