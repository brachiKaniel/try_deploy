
import React, { Component } from 'react';
import Gantt from './Components/Gantt/gantt';
import './App.css';
import Routing from './Components/routing/routing';
import { Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Header/header'

export default function App() {

    return (
        <div>
            <Routing></Routing>
        </div>
    );

}


