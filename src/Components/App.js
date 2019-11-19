import React from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import Repositories from "./RepositoriesList/Repositories";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Auth from "./Auth/Auth";
import Profile from "./Profile/Profile";
import Main from "./MainPage/Main";
import RepositoryList from "./RepositoriesList/RepositoryList";

export const STAR_REPOSITORY = gql`
  mutation($id: ID!) {
    addStar(input: { starrableId: $id }) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;

export const UNSTAR_REPOSITORY = gql`
  mutation($id: ID!) {
    removeStar(input: { starrableId: $id }) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;

export const GET_REPOSITORIES_OF_ORGANIZATION = gql`
  {
    organization(login: "the-road-to-learn-react") {
      repositories(first: 20) {
        edges {
          node {
            id
            name
            url
            viewerHasStarred
            stargazers{
            totalCount
            }
          }
        }
      }
    }
  }
`;

const App = () => (
    <Query query={GET_REPOSITORIES_OF_ORGANIZATION}>
        {({data: {organization}, loading}) => {
            if (loading || !organization) {
                return <div>Loading ...</div>;
            }
            return (
            <Router>
                    <Switch>
                        <Route path="/repositoryList"
                               render={()=> <Repositories repositories={organization.repositories}/>}/>
                        <Route path="/auth">
                            <Auth />
                        </Route>
                        <Route path="/profile">
                            <Profile />
                        </Route>
                        <Route path="/">
                            <Main />
                        </Route>
                    </Switch>
            </Router>
            );
        }}
    </Query>
);

export default App;
