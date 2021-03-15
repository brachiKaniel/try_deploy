import React, { Component, useState } from "react";
import ReactDOM from "react-dom"
import TimeLine from "react-gantt-timeline";
import workspaces from './Components/Gantt/workspace.json'
import './App.css';
import Header from "./Components/Header/header";
import Gantt from "./Components/Gantt/gantt";
import Routing from "./Components/Gantt/routing";
debugger

export default function App() {
    const allWorkspace = { workspaces };
    console.log(allWorkspace);
    const allProjects = allWorkspace.workspaces.workspaces.projects;
    console.log(allProjects);
    const tasks = allWorkspace.workspaces.workspaces.projects[0].cards[0].tasks[0];
    console.log(tasks);
    console.log(allWorkspace.workspaces.workspaces.projects[0].cards[0].tasks);

    return (
        <div className="App">
            {/* <Demo></Demo> */}
            <Routing></Routing>
            {/* <div className="time-line-container gantBody">
                <TimeLine data={the} />
            </div> */}

        </div>
    );
}
// import React, { Component } from 'react';
// import Gantt from './Components/Gantt/gantt';
// import './App.css';

// const data = {
//     data: [
//         { id: 1, text: 'Task #1', start_date: '15-04-2019', duration: 3, progress: 0.6 },
//         { id: 2, text: 'Task #2', start_date: '18-04-2019', duration: 3, progress: 0.4 }
//     ],
//     links: [
//         { id: 1, source: 1, target: 2, type: '0' }
//     ]
// };
// class App extends Component {
//     render() {
//      return (
//         <div>
//              <div className="gantt-container">
//             <Gantt tasks={data}/>
//              </div>
//         </div>
//      );
//     }
//  }
//  export default App;