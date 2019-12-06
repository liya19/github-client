import React from 'react';
import gql from 'graphql-tag';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Auth from "./Auth/Auth";
import Profile from "./Profile/Profile";
import Main from "./MainPage/Main";
import ButtonAppBar from "./Header/Header";
import SearchByUser from "./Search/SearchByUser";
import SearchByRepository from "./Search/SearchByRepositories";

export const STAR_REPOSITORY = gql`
  mutation($id: ID!) {
    addStar(input: { starrableId: $id }) {
      starrable {
        id
        viewerHasStarred
             stargazers{
            totalCount
            }
      }
    }
  }
`;

export const GET_LOGIN = gql`
   {
      viewer {
        login
        name
        avatarUrl
        url
        bio
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

export const UNSTAR_REPOSITORY = gql`
  mutation($id: ID!) {
    removeStar(input: { starrableId: $id }) {
      starrable {
        id
        viewerHasStarred
         stargazers{
            totalCount
            }
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

const App = () => {
    return (
        <Router>
            <ButtonAppBar/>
            <Switch>
                <Route path="/auth">
                    <Auth/>
                </Route>
                <Route path="/searchUser">
                <SearchByUser/>
                </Route>
                <Route path="/searchRepository">
                    <SearchByRepository/>
                </Route>
                <Route path="/profile">
                    <Profile/>
                </Route>
                <Route path="/">
                    <Main/>
                </Route>
            </Switch>
        </Router>
    )
};

export default App;
