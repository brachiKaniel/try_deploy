
import React, { Component } from 'react';
import Gantt from './Components/Gantt/gantt';
import './App.css';
import Routing from './Components/routing/routing';
import { Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Header/header'
import DisplayGantt from './Components/Gantt/displayGantt';
import Cards from './Components/Gantt/Cards/cards'

export default function App() {

    return (
        <div>

            <Routing></Routing>
            <div className="row">
                {/* <div className="col-4"><Cards /></div> */}
                <div className="col-3"> <DisplayGantt></DisplayGantt></div>

            </div>
        </div>
    );

}


