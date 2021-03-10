import React, { Component, useState } from "react";
import ReactDOM from "react-dom"
import TimeLine from "react-gantt-timeline";
import MyGant from "./Components/Gantt/MyGantt/myGantt";
import workspaces from './Components/Gantt/workspace.json'
import './App.css';
debugger

export default function App() {
    const allWorkspace = { workspaces };
    console.log(allWorkspace);
    const allProjects = allWorkspace.workspaces.workspaces.projects;
    console.log(allProjects);
    const tasks = allWorkspace.workspaces.workspaces.projects[0].cards[0].tasks[0];
    console.log(tasks);
    console.log(allWorkspace.workspaces.workspaces.projects[0].cards[0].tasks);
    const d1 = new Date();
    const d2 = new Date();
    d2.setDate(d2.getDate() + 5);
    const [gantData, setGantData] = useState({
        id: 0,
        start: d1,
        end: d2,
        name: "ui",
        color: "pink"
    })
    // allProjects.map((item, index) => {
    //     item.cards.map((item, index) => {
    //         item.tasks.map((item, index) => {
    //             alert("hjvj");
    //         }

    //         )
    //     })
    // })


    // constructor(props) {

    //     super(props);
    //     // this.state = {
    //     //     gantData: {
    //     //         id: 0,
    //     //         start: '',
    //     //         end: '',
    //     //         name: "",
    //     //         color: ""
    //     //     }
    //     // };

    //     let d1 = new Date();
    //     let d2 = new Date();
    //     d2.setDate(d2.getDate() + 5);
    //     let d3 = new Date();
    //     d3.setDate(d3.getDate() + 8);
    //     let d4 = new Date();
    //     d4.setDate(d4.getDate() + 20);
    //     let d5 = new Date();
    //     d5.setDate(d5.getDate() + 25);
    //     let d6 = new Date();
    //     d6.setDate(d6.getDate() + 28);
    //     this.gantData = [{
    //         id: tasks.id,
    //         start: d1,
    //         end: d5,
    //         name: tasks.description,
    //         color: tasks.color,

    //     }]
    //     this.data = [
    //         {
    //             id: 1,
    //             start: d1,
    //             end: d5,
    //             name: "Demo Task 1",
    //             color: "blue",

    //         },
    //         {
    //             id: 2,
    //             start: d3,
    //             end: d4,
    //             name: "Demo Task 2",
    //             color: "pink"
    //         },
    //         {
    //             id: 2,
    //             start: d2,
    //             end: d5,
    //             name: "Demo Task 2",
    //             color: "orange"
    //         },
    //         {
    //             id: 2,
    //             start: d4,
    //             end: d5,
    //             name: "Demo Task 2",
    //             color: "pink"
    //         },
    //         {
    //             id: 2,
    //             start: d5,
    //             end: d6,
    //             name: "Demo Task 2",
    //             color: "blue"
    //         },
    //         {
    //             id: 2,
    //             start: d2,
    //             end: d6,
    //             name: "Demo Task 2",
    //             color: "orange"
    //         }
    //     ];
    //     // this.links = [{ id: 1, start: 1, end: 2 }];
    // }

    return (
        <div className="App">
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


            <div className="time-line-container gantBody">
                <TimeLine data={gantData} />
            </div>
        </div>
    );
}