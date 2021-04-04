
import React, { Component } from 'react';
import Gantt from './Components/Gantt/gantt';
import './App.css';
import Routing from './Components/routing/routing';
import { Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Header/header'
import DisplayGantt from './Components/Gantt/displayGantt';

export default function App() {

    return (
        <div>  
            <Routing></Routing>
            <br></br>
            <div className="row">
                <div className="col-1">
                <div style={{height:'300px',backgroundColor:'black'}}></div>
                </div>
                <div className="col-9"> 
                <div style={{height:'300px'}}>
                
                </div>
                <DisplayGantt></DisplayGantt>
               
                 </div>
            </div>
            
           
        </div>
    );

}


