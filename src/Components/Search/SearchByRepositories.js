import React, {useState} from 'react';

import gql from "graphql-tag";
import TextField from "@material-ui/core/TextField";
import Query from "react-apollo/Query";
import Loading from "../Loading";
import RepositoryList from "../RepositoriesList/RepositoryList";



export const SEARCHREPO = gql`
query($queryString: String!) {
  search(query: $queryString, type: REPOSITORY, first: 10) {
    repositoryCount
    edges {
      node {
        ... on Repository {
        id
          name
          descriptionHTML
          stargazers {
            totalCount
          }
          forks {
            totalCount
          }
          updatedAt
        }
      }
    }
  }
 }
 `;


const SearchByRepository = () => {
 const [input, setInput] = useState("");
 return (<div>
      <TextField id="standard-basic" label="Search" value={input}
                 onChange={event => {
                  setInput(event.target.value);

                 }}> </TextField>

      <Query query={SEARCHREPO} variables={{queryString: input}}>
       {({loading, error, data}) => {
        if (loading) return (
            <Loading/>
        );
        if (error) return <p>Something went wrong...</p>;
        return <RepositoryList data={data}/>
       }}

      </Query>
     </div>
 )
};

export default SearchByRepository;