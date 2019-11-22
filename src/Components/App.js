import React from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import styles from './App.css';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Repositories from "./RepositoriesList/Repositories";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Auth from "./Auth/Auth";
import Profile from "./Profile/Profile";
import Main from "./MainPage/Main";
import CircularProgress from "@material-ui/core/CircularProgress";
import ButtonAppBar from "./Header/Header";

export const STAR_REPOSITORY = gql`
  mutation($id: ID!) {
    addStar(input: { starrableId: $id }) {
      starrable {
        id
        viewerHasStarred
             stargazers{
            totalCount
            }
      }
    }
  }
`;

export const UNSTAR_REPOSITORY = gql`
  mutation($id: ID!) {
    removeStar(input: { starrableId: $id }) {
      starrable {
        id
        viewerHasStarred
         stargazers{
            totalCount
            }
      }
    }
  }
`;

export const GET_REPOSITORIES_OF_ORGANIZATION = gql`
  {
    organization(login: "the-road-to-learn-react") {
      repositories(first: 20) {
        edges {
          node {
            id
            name
            url
            viewerHasStarred
             stargazers{
            totalCount
            }
          }
        }
      }
    }
  }
`;

const App = () => (
    <Query query={GET_REPOSITORIES_OF_ORGANIZATION}>
        {({data: {organization}, loading}) => {
            if (loading || !organization) {
                    return <div style={{ width:'213',
                    height:'213',
                        position: 'absolute', left: '43%', top: '35%'
                    }}>
                        <svg viewBox="0 0 512 512" width="212" height="212" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#2088ff" d="m332.289429,87.087219c60.033295,-20.366676 114.402222,-21.83609 172.935547,1.047241l-11.403595,32.850952c-43.333344,-15.5 -104.147491,-15.984329 -148.480804,-0.734329" transform="rotate(45 418.757 96.1885)">
                                <animate attributeName="fill" values="#2088ff;#fff;#2088ff;#2088ff" begin="0s" dur="1s" repeatCount="indefinite"/>
                            </path>
                            <path fill="#2088ff" d="m398.527466,246.388596c60.033325,-20.366684 114.402222,-21.83609 172.935547,1.047241l-11.403564,32.850967c-43.333374,-15.500031 -104.147491,-15.984344 -148.480835,-0.734344" transform="rotate(90 484.995 255.49)">
                                <animate attributeName="fill" values="#2088ff;#fff;#2088ff;#2088ff" begin="0.125s" dur="1s" repeatCount="indefinite"/>
                            </path>
                            <path fill="#2088ff" d="m331.332214,404.823669c60.033325,-20.366699 114.402252,-21.83609 172.935547,1.047241l-11.403534,32.850952c-43.333405,-15.500031 -104.147522,-15.984344 -148.480865,-0.734344" transform="rotate(135 417.8 413.925)">
                                <animate attributeName="fill" values="#2088ff;#fff;#2088ff;#2088ff" begin="0.250s" dur="1s" repeatCount="indefinite"/>
                            </path>
                            <path fill="#2088ff" d="m171.58223,470.323669c60.03331,-20.366699 114.402237,-21.83609 172.935532,1.047241l-11.403534,32.850952c-43.333405,-15.500031 -104.147522,-15.984344 -148.48085,-0.734344" transform="rotate(180 258.05 479.425)">
                                <animate attributeName="fill" values="#2088ff;#fff;#2088ff;#2088ff" begin="0.375s" dur="1s" repeatCount="indefinite"/>
                            </path>
                            <path fill="#2088ff" d="m13.0822,406.074005c60.033301,-20.367004 114.401801,-21.835999 172.935805,1.046997l-11.404007,32.850983c-43.332993,-15.5 -104.147301,-15.983978 -148.480589,-0.733978" transform="rotate(-135 99.55 415.175)">
                                <animate attributeName="fill" values="#2088ff;#fff;#2088ff;#2088ff" begin="0.500s" dur="1s" repeatCount="indefinite"/>
                            </path>
                            <path fill="#2088ff" d="m-53.713486,247.091553c60.03331,-20.367004 114.40181,-21.835999 172.935806,1.046997l-11.404022,32.850983c-43.332977,-15.5 -104.147277,-15.983978 -148.480576,-0.733978" transform="rotate(-90 32.754 256.193)">
                                <animate attributeName="fill" values="#2088ff;#fff;#2088ff;#2088ff" begin="0.625s" dur="1s" repeatCount="indefinite"/>
                            </path>
                            <path fill="#2088ff" d="m12.883621,87.061485c60.033295,-20.366669 114.402206,-21.836082 172.935562,1.047249l-11.403595,32.850952c-43.333344,-15.5 -104.147507,-15.984329 -148.48082,-0.734337" transform="rotate(-45 99.3514 96.1628)">
                                <animate attributeName="fill" values="#2088ff;#fff;#2088ff;#2088ff" begin="0.750s" dur="1s" repeatCount="indefinite"/>
                            </path>
                            <path fill="#2088ff" d="m172.906631,20.929741c60.03331,-20.366681 114.402206,-21.836091 172.935562,1.04723l-11.403595,32.85096c-43.333344,-15.5 -104.147507,-15.984322 -148.48082,-0.734329">
                                <animate attributeName="fill" values="#2088ff;#fff;#2088ff;#2088ff" begin="0.875s" dur="1s" repeatCount="indefinite"/>
                            </path>
                            <path fill="#2088ff" d="m197.75,459.850006c0,0 -0.125,-48.75 -0.125,-48.850006c0,-0.100006 -4.75,-4.399994 -33,-1c-28.25,3.399994 -62.5,-66.649994 -65.25,-69.75c-2.75,-3.100006 14,-5.649994 26.5,5c12.5,10.649994 38.25,33.350006 38.5,33.25c0.25,-0.100006 31.75,0.600006 31.75,0.5c0,-0.100006 3,-44.149994 20.75,-37.5c17.75,6.649994 -72.5,1.350006 -97.75,-61.25c-25.25,-62.600006 19.25,-124.899994 20.25,-115.399994c1,9.5 -17,-35 -10.25,-46.850006c6.75,-11.849998 19.25,-9.400002 30.25,-5.5c11,3.900002 34.25,20.350006 39.25,21.25c5,0.899994 18.25,-8.150002 59.25,-7.5c41,0.650002 52.769196,6.138474 56.75,6.5c3.980804,0.361526 30.519165,-17.38076 38.250061,-22.557701c7.730896,-5.176941 18.653595,-9.092308 28.653687,0.78849c10.000092,9.880798 4.923157,67.00383 3.096252,55.519211c-1.826904,-11.484619 36.25,70.600006 6,122.100006c-30.25,51.5 -99.25,52.75 -87.75,55.899994c11.5,3.149994 15,33.350006 14.75,49.850006l-0.25,65.899994l-22.875,3.875l-0.5,-74.75c0.125,-9.225006 -9.125,-10.649994 -9.625,-9.75l-0.25,85.875l-21.25,1.25l-0.25,-86.75l-10.5,0l0,86.5l-20.75,-1l-0.25,-84.25c0,-0.100006 -8.75,-1.149994 -8.25,10.75l-0.5,72.25"/>
                        </svg>
                </div>
                // return <div style={{
                //     position: 'absolute', left: '50%', top: '50%',
                //     transform: 'translate(-50%, -50%)'
                // }}>
                //     <Loader
                //     type="Oval"
                //     color="#00BFFF"
                //     height={100}
                //     width={100}
                //     timeout={3000}
                // /></div>
            }
            return (
                <Router>
                    <ButtonAppBar/>
                    <Switch>
                        <Route path="/repositoryList"
                               render={() => <Repositories repositories={organization.repositories}/>}/>
                        <Route path="/auth">
                            <Auth/>
                        </Route>
                        <Route path="/profile">
                            <Profile/>
                        </Route>
                        <Route path="/">
                            <Main/>
                        </Route>
                    </Switch>
                </Router>
            );
        }}
    </Query>
);

export default App;
