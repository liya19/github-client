import React from "react";
import {useParams} from "react-router-dom";
import {Query} from "react-apollo";
import Loading from "../Loading";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import gql from "graphql-tag";

const GET_REPOSITORY = gql`
query($login: String!, $repo: String!) {
  repositoryOwner(login: $login) {
    repositories {
      totalCount
    }
    repository(name: $repo) {
     id
      name
        owner{
              id
              login
          }
      createdAt 
      isArchived
      isPrivate
      url
      description
      forks {
        totalCount
      }
      issues {
        totalCount
      }
      stargazers {
        totalCount
      }
      watchers {
        totalCount
      }
      pullRequests {
        totalCount
      }
      labels(first:10) {
        edges {
          node {
            name
          }
        }
      }
      milestones(first:10) {
        edges {
          node {
            title
          }
        }
      }
    }
  }
}
`;

const Repository = () => {
    let {login, name} = useParams();
    return <Query query={GET_REPOSITORY} variables={{login: login, repo: name}}>
        {({data,loading}) => {
            if (loading || !data) {
                return <Loading/>
            }

            return <div>
                <Paper style={{
                    width: '300px',
                    height: '200px',
                    marginTop: '20px',
                    marginLeft: '30px'
                }}>
                    <Typography variant="h5" componxent="h3">
                        {data.repositoryOwner.repository.name}
                    </Typography>
                    <Typography component="p">
                        {data.repositoryOwner.repository.description}
                    </Typography>
                </Paper>
            </div>
        }
        }
    </Query>

};

export default Repository;