import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom"
import TimeLine from "react-gantt-timeline";
import workspaces from './workspace.json'
import './gantt.css'
import { useParams } from "react-router";
import moment from 'moment';

export default function Gantt(props) {
    debugger
    const projectName = useParams()
    console.log(projectName);

    debugger

    const allWorkspace = { workspaces };
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
                { theCards.push(item); }
            })
                : console.log("bed", item.cards);
        }
    })
    console.log("now", theCards);
    debugger
    {
        theCards ? theCards.map((item, index) => {
            item.tasks.map((item, index) => {
                console.log("oooooooppppppp", item);
                theTasks.push(item)
            })
        }) : theTasks.push(null)

    }

    console.log("oo", theCards);


    debugger
    console.log("the cards", theCards);
    console.log("the tasks", theTasks);

    theTasks.map((item, index) => {
        item.start = moment(item.start, "MM-DD-YYYY").toDate();
        item.end = moment(item.end, "MM-DD-YYYY").toDate();
    })
    console.log(theTasks);
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
            < div className="time-line-container gantBody" style={{ borderRadius: "20px" }}>
                <TimeLine data={theTasks} />
            </div>
        </>
    );
}