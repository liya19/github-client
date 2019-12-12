import React, {useState} from 'react';
import Query from "react-apollo/Query";
import TextField from "@material-ui/core/TextField";
import UserList from "./UserList";
import Loading from "../Loading";
import {SEARCH_USER} from "../qraphql/SEARCH_USER";



const SearchByUser = () => {
    const [input, setInput] = useState("");
    return (<div>
            <TextField id="standard-basic"
                       value={input}
                       style={{
                           padding: 5
                       }}
                       label="Search"
                       onChange={event => {
                           setInput(event.target.value);
                       }}> </TextField>

            <Query query={SEARCH_USER} variables={{queryString: input}}>
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