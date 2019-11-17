import React from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import Repositories from "./Repositories";

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
               <Repositories repositories={organization.repositories}/>
            );
        }}
    </Query>
);

export default App;
