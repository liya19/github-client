import React from "react";
import '../App';
import {Link} from 'react-router-dom';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Button, Card, CardActions, CardContent} from "@material-ui/core";
import UnStar from "../RepositoriesList/UnStar";
import Star from "../RepositoriesList/Star";


export const useStyles = makeStyles({
    card: {
        width: 410,
        height: 163,
        margin: 15,
        float: 'left',
        borderRadius: '4px',
        background: '#fff',
        boxShadow: '0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05)',
        cursor: 'pointer',
        transition: '.3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12)'
    },

    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const RepoList = ({data}) => {
    const classes = useStyles();
    return <ul style={{display: 'flex', flexWrap: 'wrap',listStyle:'none'}}>
        {data.search.edges.map(({node}) =>
            <li key={node.id} style={{margin:16}}>
                <Card className={classes.card}>
                    <CardContent>
                        <Link style={{
                            fontSize: 24
                        }} to={`/repository/${node.owner.login}/${node.name}`}>
                            {node.name}
                        </Link>
                    </CardContent>
                    <CardActions>
                        <Button style={{marginTop: '34px'}}>
                            {node.viewerHasStarred ? (<UnStar node={node}/>) : (<Star node={node}/>)}
                            {node.stargazers.totalCount}
                        </Button>
                        <div>
                        </div>
                    </CardActions>

                </Card>
            </li>)

        })}
    </ul>
};
export default RepoList;