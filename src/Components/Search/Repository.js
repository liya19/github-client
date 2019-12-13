import React from "react";
import {useParams} from "react-router-dom";
import {Query} from "react-apollo";
import Loading from "../Loading";
import Typography from "@material-ui/core/Typography";
import {Icon} from "@material-ui/core";
import { GET_REPOSITORY } from "../qraphql/GET_REPOSITORY";

const Repository = () => {
    let {login, name} = useParams();
    return <Query query={GET_REPOSITORY} variables={{login: login, repo: name}}>
        {({data, loading}) => {
            if (loading || !data) {
                return <Loading/>
            }

            return <div>
                <div style={{
                    width: '400px',
                    height: '200px',
                    marginTop: '20px',
                    marginLeft: '30px'
                }}>
                    <Typography variant="h5" componxent="h3" style={{marginBottom: 20}}>
                      Name:  {data.repositoryOwner.repository.name}
                    </Typography>
                    <Typography component="p" style={{marginBottom: 20}}>
                        Description: {data.repositoryOwner.repository.description}
                    </Typography>
                    <Typography omponent="p">
                        <Icon style={{
                            fontSize:18,
                            marginRight: 4,
                        }}>visibility</Icon>
                        Watchers: {data.repositoryOwner.repository.watchers.totalCount}
                    </Typography>
                    <Typography omponent="p">
                        <Icon style={{
                            fontSize:18,
                            marginRight: 4,
                        }}>favorite</Icon>
                        Stars: {data.repositoryOwner.repository.stargazers.totalCount}
                    </Typography>
                    <Typography omponent="p">
                        <Icon style={{
                            fontSize:18,
                            marginRight: 4,
                        }}>call_split</Icon>
                        Forks: {data.repositoryOwner.repository.forks.totalCount}
                    </Typography>
                </div>
            </div>
        }
        }
    </Query>

};

export default Repository;