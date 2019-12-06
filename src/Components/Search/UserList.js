import React from 'react';
import {CardContent} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";
import {useStyles} from "../RepositoriesList/RepositoryList";



const UserList = ({data}) => {
    return <ul>
        {data.search.edges.map(({node}) => {
            return (
                <Card className={useStyles.card}>
                    <li key={node.id}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    <Link to={`/user/${node.id}`}>{node.login}</Link>
                                    <Avatar src={node.avatarUrl}
                                            variant="rounded"
                                            style={{
                                                width: '300px',
                                                height: '340px'
                                            }}/>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {node.bio}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </li>
                </Card>
            );
        })}
    </ul>
};
export default UserList;