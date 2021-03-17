import { react, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, withRouter, useParams, Redirect, useHistory } from "react-router-dom";
import Header from '../Header/header';
import DisplayGantt from './displayGantt';
import Gantt from './gantt';
export default function Routing(props) {
    debugger

    return (
        <>

            <Router>
                <Header></Header>
                <Switch>
                    <Route path='/DisplayGantt'>
                        <DisplayGantt />
                    </Route>
                    <Route path='/Gantt/:projectName'>
                        <Gantt />
                    </Route>
                </Switch>

            </Router>


        </>

    );
}