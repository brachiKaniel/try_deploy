import React, { Component } from 'react';
import { useParams } from 'react-router';
import Routing from '../routing/routing';
import Gantt from './gantt';
import workspaces from './workspace.json'

export default function DisplayGantt() {
    debugger
    const projectName = "project1";
    console.log(projectName);
    const allWorkspace = { workspaces };
    console.log(allWorkspace);
    const allTheWorkspaces = allWorkspace.workspaces.workspaces.projects;

    const theCards = []
    const theTasks = []
    const mone = []

    allTheWorkspaces.map((item, index) => {
        {
            item.name === projectName ? item.cards.map((item, index) => {
                { theCards.push(item); }
            })
                : console.log("bed", item.cards);
        }
    })
    console.log("the cards", theCards);

    {
        theCards ? theCards.map((item, index) => {
            let numOfTasks = 0;
            // theTasks.push(item.tasks)
            item.tasks.map((item) => {
                numOfTasks++;
                console.log("oooooooppppppp", item);
                // return (
                //     <div style={{ boxShadow: "1px 1px 1px 1px red" }}>
                //         {theTasks.push(item)}
                //     </div>
                // )
                theTasks.push(item)
            })
            mone.push(numOfTasks)
        }) : theTasks.push(null)

    }
    console.log("mone", mone);
    let minYear = "3000-01-01";
    let maxYear = "1000-01-01";
    let currDate;

    debugger

    {
        theTasks.map((item) => {
            let year = item.start_date.split('-')[0];
            if (year > maxYear.split('-')[0]) {
                debugger
                currDate = year
                console.log("papapap", year);
                year = year.concat('-01-01')
                console.log("tttt", year);
                maxYear = year;
            } else if (year < minYear) {
                minYear = year
            }
            else {
                return
            }


        })
        console.log("min", minYear);
        console.log("max", maxYear);
    }
    currDate = parseInt(currDate)
    currDate = currDate + 2
    currDate = currDate.toString();
    console.log("papapap", currDate);
    currDate = currDate.concat('-01-01')
    console.log("tttt", currDate);
    maxYear = currDate;
    console.log();
    theTasks.push(

        {
            "id": 2985730,
            "text": "first",
            "start_date": currDate,
            "duration": 3,
            "progress": 0.6,
        })


    console.log("the tasks", theTasks);

    const state = {
        currentZoom: 'Days',
        messages: []
    };
    const data = {
        data: theTasks,
        // data: [

        // { id: 1, text: 'Task #1', start_date: "'1000-02-12'", duration: 0, progress: 0 },
        // { id: 2, text: 'Task #2', start_date: '2020-02-12', duration: 3, progress: 0.6, priority: "high" },
        // { id: 3, text: 'Task #3', start_date: '2020-04-16', duration: 3, progress: 0.4, priority: "high" },
        // { id: 4, text: 'Task #4', start_date: '2100-04-16', duration: 1, progress: 1 }
        // ],

        links: [
            { id: 1, source: 1, target: 2, type: '0' }
        ]
    };

    // addMessage(message) {
    //     const maxLogLength = 5;
    //     const newMessate = { message };
    //     const messages = [
    //         newMessate,
    //         ...this.state.messages
    //     ];

    //     if (messages.length > maxLogLength) {
    //         messages.length = maxLogLength;
    //     }
    //     this.setState({ messages });
    // }

    const logDataUpdate = (type, action, item, id) => {
        let text = item && item.text ? ` (${item.text})` : '';
        let message = `${type} ${action}: ${id} ${text}`;
        if (type === 'link' && action !== 'delete') {
            message += ` ( source: ${item.source}, target: ${item.target} )`;
        }
        this.addMessage(message);
    }

    const handleZoomChange = (zoom) => {
        this.setState({
            currentZoom: zoom
        });
    }


    const { currentZoom, messages } = state;
    return (
        <div>
            <div className="zoom-bar">
                {/* <Toolbar
            zoom={currentZoom}
            onZoomChange={this.handleZoomChange}
          /> */}
            </div>
            <div className="gantt-container">
                <Gantt
                    tasks={data}
                    zoom={currentZoom}
                    onDataUpdated={logDataUpdate}
                />
            </div>
            {/* <MessageArea
          messages={messages}
        /> */}
        </div>
    );

}
