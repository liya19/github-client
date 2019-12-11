import React from "react";
import main1 from "../../image/main1.png"
import SearchIcon from "@material-ui/core/SvgIcon/SvgIcon";

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <h2 style={{
                    textAlign: 'center',
                    fontFamily: ' -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
                    fontSize: 35,
                    marginLeft: 30,
                    fontWeight: 'normal',
                    color: '#24292e'
                }}>Welcome to GHT<SearchIcon  style={{size:25, color:'#a3aab1'}}/></h2>;
                <div>
                    <img src={main1} width={'1255'} height={'600'} style={{
                        display: 'block',
                        margin: '0 auto',
                        marginTop: -55
                    }} alt={"mainpage"}/>
                </div>
            </div>
        )
    }
}