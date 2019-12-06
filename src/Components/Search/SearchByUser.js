import React, {useState} from 'react';

import gql from "graphql-tag";
import Query from "react-apollo/Query";
import TextField from "@material-ui/core/TextField";
import UserList from "./UserList";
import Loading from "../Loading";

export const SEARCH = gql`
query($queryString: String!) {
  search(query: $queryString, type: USER, first: 10) {
    edges {
      node {
        ... on User {
        id
          name
         login
         url
         bio
         avatarUrl
          }
      }
    }
  }
}
`;

const SearchByUser = () => {
    const [input, setInput] = useState("");
    return (<div>
            <TextField id="standard-basic" label="Search" value={input}
                       onChange={event => {
                           setInput(event.target.value);

                       }}> </TextField>

            <Query query={SEARCH} variables={{queryString: input}}>
                {({loading, error, data}) => {
                    if (loading) return (
                        <Loading/>
                    );
                    if (error) return <p>Something went wrong...</p>;
                    return <UserList data={data}/>
                }}

            </Query>
        </div>
    )
};

export default SearchByUser;