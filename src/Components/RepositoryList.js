import React from "react";
import './App';
import './App.css'
import Select from "./Select";
import Star from "./Star";

let RepositoryList = ({
                          repositories,
                          selectedRepositoryIds,
                          toggleSelectRepository,
                      }) => (
    <ul>
        {repositories.edges.map(({node}) => {
            const isSelected = selectedRepositoryIds.includes(node.id);

            const rowClassName = ['row'];

            if (isSelected) {
                rowClassName.push('row_selected');
            }

            return (
                <li className={rowClassName.join(' ')}  key={node.id}>
                    <Select
                        id={node.id}
                        isSelected={isSelected}
                        toggleSelectRepository={toggleSelectRepository}
                    />{' '}
                    <a href={node.url}>{node.name}</a>{' '}
                    {!node.viewerHasStarred && <Star id={node.id}/>}
                </li>
            );
        })}
    </ul>
);
export default RepositoryList;