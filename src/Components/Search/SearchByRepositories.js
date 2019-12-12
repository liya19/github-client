import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Query from "react-apollo/Query";
import Loading from "../Loading";
import RepoList from "./RepoList";
import {SEARCH_REPO} from "../qraphql/SEARCH_REPO";


const SearchByRepository = () => {
    const [input, setInput] = useState("");
    return (<div>
            <TextField id="standard-basic"
                       label="Search"
                       value={input}
                       style={{
                           padding: 5
                       }}
                       onChange={event => {
                           setInput(event.target.value);

                       }}> </TextField>

            <Query query={SEARCH_REPO} variables={{queryString: input}}>
                {({loading, error, data}) => {
                    if (loading) return (
                        <Loading/>
                    );
                    if (error) return <p>Something went wrong...</p>;
                    return <RepoList data={data}/>
                }}

            </Query>
        </div>
    )
};

export default SearchByRepository;