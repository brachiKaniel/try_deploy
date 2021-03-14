import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom"
import TimeLine from "react-gantt-timeline";
import workspaces from './workspace.json'
import './gantt.css'
import { useParams } from "react-router";

export default function Gantt(props) {
    debugger
    const projectName = useParams()
    console.log(projectName);

    debugger

    const allWorkspace = { workspaces };
    // console.log(new Date(tasks.startDate));
    // const d1 = new Date();
    // const d2 = new Date();
    // let d3 = new Date();
    // d3.setDate(d3.getDate() + 8);
    // let d4 = new Date();
    // d4.setDate(d4.getDate() + 20);
    // let d5 = new Date();
    // d5.setDate(d5.getDate() + 25);
    // d2.setDate(d2.getDate() + 5);
    const allTheWorkspaces = allWorkspace.workspaces.workspaces.projects;
    debugger
    // const [gantData, setGantData] = useState({
    //     id: '',
    //     start: d1,
    //     end: d2,
    //     name: "ui",
    //     color: "pink"
    // });
    const theCards = []
    const theTasks = []
    debugger
    allTheWorkspaces.map((item, index) => {
        {
            debugger
            item.name === projectName.projectName ? item.cards.map((item, index) => {
                { theCards.push(item) }
            })
                : console.log("bed", item.cards);
        }
    })
    console.log("now", theCards);

    theCards.map((item, index) => {
        debugger
        console.log(item.name);
        theTasks.push(item)
    })
    console.log("oo", theCards);


    debugger
    console.log("the cards", theCards);
    console.log("the tasks", theTasks);

    // const data = [{
    //     id: task1.id,
    //     start: d3,
    //     end: d5,
    //     name: task1.description,
    //     color: task1.color
    // }, {
    //     id: task2.id,
    //     start: d1,
    //     end: d2,
    //     name: task2.description,
    //     color: task2.color
    // }];




    return (
        <>
            {theCards.map((item) =>
                <h1>{item.name}</h1>
            )}
            {/* 
            {theCards ? theCards.map((item, index) => {
                theTasks.push(item.tasks)

            }) : null} */}




            {/* <div className="time-line-container gantBody"> */}
            <div className="time-line-container gantBody" style={{ borderRadius: "20px" }}>
                {theCards ? <TimeLine data={theTasks} /> : ""}

            </div>
            {/* </div> */}
            {/* </div> */}
        </>
    );
}