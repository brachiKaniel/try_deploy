import React, { useState,useEffect  } from "react";
//
import ReactDOM from "react-dom"
import TimeLine from "react-gantt-timeline";
// import MyGant from "./Components/Gantt/MyGantt/myGantt";
import workspaces from './workspace.json'
import './gantt.css'




export default function Gantt(props) {
<<<<<<< HEAD
    const projectName = "project1"

    debugger

=======
    useEffect(() => {
        // Update the document title using the browser API
       
        window.location.reload();
      });
     
      const {projects}=props;
    
    debugger
>>>>>>> dev
    const allWorkspace = { workspaces };
    console.log(allWorkspace);
    const allProjects = allWorkspace.workspaces.workspaces.projects;
    console.log(allProjects);
    const task1 = allWorkspace.workspaces.workspaces.projects[0].cards[0].tasks[0];
    const task2 = allWorkspace.workspaces.workspaces.projects[0].cards[0].tasks[1];
    const allTasks = allWorkspace.workspaces.workspaces.projects[0].cards[0].tasks;
    console.log(task1);
    console.log(allWorkspace.workspaces.workspaces.projects[0].cards[0].tasks);
    debugger
    let ff = new Date(task1.startDate)
    console.log(ff);
    // console.log(new Date(tasks.startDate));
    const d1 = new Date();
    const d2 = new Date();
    let d3 = new Date();
    d3.setDate(d3.getDate() + 8);
    let d4 = new Date();
    d4.setDate(d4.getDate() + 20);
    let d5 = new Date();
    d5.setDate(d5.getDate() + 25);
    d2.setDate(d2.getDate() + 5);
    const allTheWorkspaces = allWorkspace.workspaces.workspaces.projects;
    debugger
    const [gantData, setGantData] = useState({
        id: '',
        start: d1,
        end: d2,
        name: "ui",
        color: "pink"
    });
    const theCards = []
    const theTasks = []
    console.log(allTheWorkspaces.projects);
    allTheWorkspaces.map((item, index) => {
        {
            item.name === projectName ? item.cards.map((item, index) => {
                { theCards.push(item) }
            })
                : console.log("bed", item.cards);
        }
    })
    theCards.map((item, index) => {
        theTasks.push(item.tasks)

    })
    console.log("the cards", theCards);
    console.log("the tasks", theTasks);

    const data = [{
        id: task1.id,
        start: d3,
        end: d5,
        name: task1.description,
        color: task1.color
    }, {
        id: task2.id,
        start: d1,
        end: d2,
        name: task2.description,
        color: task2.color
    }];
    // allProjects.map((item, index) => {
    //     item.cards.map((item, index) => {
    //         item.tasks.map((item, index) => {
    //             console.log(item);
    //             // alert("hjvj");
    //         }

    //         )
    //     })
    // })



    return (
<<<<<<< HEAD
        <div>
            {theCards.map((cards) =>
                <h1>{cards.name}</h1>
            )}
            {allProjects.map((item, index) => (
                <tr>
                    <td>
                        {
                            item.cards.map((item, index) => (
                                <tr>
                                    <td>
                                        {
                                            item.tasks.map((item, indes) => (
                                                <>

                                                    {/* console.log("dknk",item); */}
                                                    {/* this.state.gantData={this.state.gantData.id = item.id, this.state.gantData.start = item.startDate, this.state.gantData.end = item.dueDate, this.state.gantData.name = item.description, this.data.color = item.color} */}

                                                </>


                                            ))
                                        }
                                    </td>
                                </tr>
                            ))
                        }
                    </td>
                </tr>
            ))}
=======
        <div >
            
>>>>>>> dev
            <div className="time-line-container gantBody">
                <TimeLine data={allTasks} />
            </div>
        </div>
    );
}
// import React, { Component } from 'react';
// import { gantt } from 'dhtmlx-gantt';
// import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
// import './gantt.css';

// export default class Gantt extends Component {
//     componentDidMount() {

//         const { tasks } = this.props;
//         gantt.init(this.ganttContainer);
//         gantt.parse(tasks);
//     }

//     render() {
//         return (
//             <div
//                 ref={(input) => { this.ganttContainer = input }}
//                 style={{ width: '100%', height: '100%' }}
//             ></div>
//         );
//     }
// }