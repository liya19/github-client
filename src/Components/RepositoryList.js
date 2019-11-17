import React from "react";
import './App';
import Select from "./Select";
import Star from "./Star";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Button, Card, CardActions, CardContent} from "@material-ui/core";
import UnStar from "./UnStar";


const useStyles = makeStyles({
    card: {
        minWidth: 275,
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

const RepositoryList = ({
                            repositories,
                            selectedRepositoryIds,
                            toggleSelectRepository,
                        }) => {
    const classes = useStyles();
    return <ul>
        {repositories.edges.map(({node}) => {
            const isSelected = selectedRepositoryIds.includes(node.id);

            const rowClassName = ['row'];

            if (isSelected) {
                rowClassName.push('row_selected');
            }

            return (
                <div>
                    <Card className={classes.card}>
                        <li className={rowClassName.join(' ')} key={node.id}>

                            <CardContent>
                                <Button href={node.url}>{node.name}</Button>
                            </CardContent>
                            <CardActions>
                                <Select
                                    id={node.id}
                                    isSelected={isSelected}
                                    toggleSelectRepository={toggleSelectRepository}
                                />
                                <Button>
                                    {node.viewerHasStarred ? (<UnStar node={node}/>):(<Star node={node}/>) }
                                </Button>

                            </CardActions>
                        </li>
                    </Card>
                </div>
            );
        })}
    </ul>
};
export default RepositoryList;