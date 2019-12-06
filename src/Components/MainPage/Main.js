import React from "react";
import main1 from "../../image/main1.png"
import {Typography} from "@material-ui/core";
import Loading from "../Loading";

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <Typography style={{
                    textAlign: 'center',
                    color: 'inherit',
                    fontSize: '50px',
                    fontWeight: 'medium'
                }}>Welcome to Git</Typography>
                <div>
                    <img src={main1} width={'1250'} height={'596'} style={{
                        display: 'block',
                        margin: '0 auto',
                    }}/>
                </div>
            </div>
        )
    }
}