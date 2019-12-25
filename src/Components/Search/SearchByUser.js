import React, {useState} from 'react';
import Query from "react-apollo/Query";
import TextField from "@material-ui/core/TextField";
import UserList from "./UserList";
import Loading from "../Loading";
import {SEARCH_USER} from "../qraphql/SEARCH_USER";
import SearchIcon from "@material-ui/core/SvgIcon/SvgIcon";
import profile from "../../image/profile.jpg";



const SearchByUser = () => {
    const [input, setInput] = useState("");
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
    return (<div>
            <TextField id="standard-basic"
                       value={input}
                       placeholder="Search"
                       style={{
                           display: "flex",
                           alignItems: "center",
                           height: "100px"
                       }}
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