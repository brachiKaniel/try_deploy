// import React, { Component, useState } from "react";
// import ReactDOM from "react-dom"
// import TimeLine from "react-gantt-timeline";
// import workspaces from './Components/Gantt/workspace.json'
// import './App.css';
// import Header from "./Components/Header/header";
// import Gantt from "./Components/Gantt/gantt";
// import Routing from "./Components/Gantt/routing";
// import moment from 'moment';
// debugger

// export default function App() {
//     const allWorkspace = { workspaces };
//     console.log(allWorkspace);
//     const allTheWorkspaces = allWorkspace.workspaces.workspaces.projects;
//     debugger
//     // console.log(allProjects);
//     // const tasks = allWorkspace.workspaces.workspaces.projects[0].cards[0].tasks[0];
//     // console.log(tasks);
//     // console.log(allWorkspace.workspaces.workspaces.projects[0].cards[0].tasks);
//     const projectName = "project1"

//     const theCards = []
//     const theTasks = []

//     allTheWorkspaces.map((item, index) => {
//         {

//             item.name === projectName ? item.cards.map((item, index) => {
//                 { theCards.push(item); }
//             })
//                 : console.log("bed", item.cards);
//         }
//     })
//     console.log("the cards", theCards);
//     // console.log("now", theCards);

//     {
//         theCards ? theCards.map((item, index) => {
//             item.tasks.map((item, index) => {
//                 console.log("oooooooppppppp", item);
//                 theTasks.push(item)
//             })
//         }) : theTasks.push(null)

//     }

//     console.log("the tasks", theTasks);


//     // console.log("oo", theCards);


//     // debugger
//     // console.log("the cards", theCards);
//     // console.log("the tasks", theTasks);

//     // theTasks.map((item, index) => {
//     //     item.start = moment(item.start, "MM-DD-YYYY").toDate();
//     //     item.end = moment(item.end, "MM-DD-YYYY").toDate();
//     // })
//     // console.log(theTasks);

//     const data = {
//         data: theTasks,
//         // data: [

//         //     { id: 1, text: 'mm', start_date: '15-04-1000', duration: 3, progress: 0.6 },
//         //     { id: 2, text: 'hub', start_date: '12-04-2019', duration: 3, progress: 0.4 },
//         //     { id: 3, text: 'logo works', start_date: '13-04-2019', duration: 3, progress: 0.5 },
//         //     { id: 4, text: 'knoy my', start_date: '14-04-2019', duration: 3, progress: 0.6 },
//         //     { id: 5, text: 'project', start_date: '15-04-2019', duration: 3, progress: 0.7 },
//         //     { id: 6, text: 'hub', start_date: '12-04-1500', duration: 3, progress: 0.8 },


//         // ],
//         links: [
//             { id: 6, source: 6, target: 6, type: '0' }
//         ]
//     };
//     // const d1 = new Date();
//     // const d2 = new Date();
//     // d2.setDate(d2.getDate() + 5);
//     // const [gantData, setGantData] = useState({
//     //     id: 0,
//     //     start: d1,
//     //     end: d2,
//     //     name: "ui",
//     //     color: "pink"
//     // })
//     // allProjects.map((item, index) => {
//     //     item.cards.map((item, index) => {
//     //         item.tasks.map((item, index) => {
//     //             alert("hjvj");
//     //         }

//     //         )
//     //     })
//     // })


//     // constructor(props) {

//     //     super(props);
//     //     // this.state = {
//     //     //     gantData: {
//     //     //         id: 0,
//     //     //         start: '',
//     //     //         end: '',
//     //     //         name: "",
//     //     //         color: ""
//     //     //     }
//     //     // };

//     //     let d1 = new Date();
//     //     let d2 = new Date();
//     //     d2.setDate(d2.getDate() + 5);
//     //     let d3 = new Date();
//     //     d3.setDate(d3.getDate() + 8);
//     //     let d4 = new Date();
//     //     d4.setDate(d4.getDate() + 20);
//     //     let d5 = new Date();
//     //     d5.setDate(d5.getDate() + 25);
//     //     let d6 = new Date();
//     //     d6.setDate(d6.getDate() + 28);
//     //     this.gantData = [{
//     //         id: tasks.id,
//     //         start: d1,
//     //         end: d5,
//     //         name: tasks.description,
//     //         color: tasks.color,

//     //     }]
//     //     this.data = [
//     //         {
//     //             id: 1,
//     //             start: d1,
//     //             end: d5,
//     //             name: "Demo Task 1",
//     //             color: "blue",

//     //         },
//     //         {
//     //             id: 2,
//     //             start: d3,
//     //             end: d4,
//     //             name: "Demo Task 2",
//     //             color: "pink"
//     //         },
//     //         {
//     //             id: 2,
//     //             start: d2,
//     //             end: d5,
//     //             name: "Demo Task 2",
//     //             color: "orange"
//     //         },
//     //         {
//     //             id: 2,
//     //             start: d4,
//     //             end: d5,
//     //             name: "Demo Task 2",
//     //             color: "pink"
//     //         },
//     //         {
//     //             id: 2,
//     //             start: d5,
//     //             end: d6,
//     //             name: "Demo Task 2",
//     //             color: "blue"
//     //         },
//     //         {
//     //             id: 2,
//     //             start: d2,
//     //             end: d6,
//     //             name: "Demo Task 2",
//     //             color: "orange"
//     //         }
//     //     ];
//     //     // this.links = [{ id: 1, start: 1, end: 2 }];
//     // }

//     return (
//         <div className="App">

//             <Routing></Routing>
//             {/* <Gantt></Gantt> */}
//             {/* {allProjects.map((item, index) => (
//                 <tr>
//                     <td>
//                         {
//                             item.cards.map((item, index) => (
//                                 <tr>
//                                     <td>
//                                         {
//                                             item.tasks.map((item, indes) => (
//                                                 <> */}

//             {/* console.log("dknk",item); */}
//             {/* this.state.gantData={this.state.gantData.id = item.id, this.state.gantData.start = item.startDate, this.state.gantData.end = item.dueDate, this.state.gantData.name = item.description, this.data.color = item.color} */}
//             {/* 
//                                                 </>


//                                             ))
//                                         }
//                                     </td>
//                                 </tr>
//                             ))
//                         }
//                     </td>
//                 </tr>
//             ))} */}
//             {/* <div className="time-line-container gantBody">
//                     <TimeLine data={the} />
//                 </div> */}
//             <div className="row mt-3"></div>
//             <Gantt tasks={data} />



//         </div>
//     );
// }
// // import React, { Component } from 'react';
// // import Gantt from './Components/Gantt/gantt';
// // import './App.css';

// // const data = {
// //     data: [
// //         { id: 1, text: 'Task #1', start_date: '15-04-2019', duration: 3, progress: 0.6 },
// //         { id: 2, text: 'Task #2', start_date: '18-04-2019', duration: 3, progress: 0.4 }
// //     ],
// //     links: [
// //         { id: 1, source: 1, target: 2, type: '0' }
// //     ]
// // };
// // class App extends Component {
// //     render() {
// //      return (
// //         <div>
// //              <div className="gantt-container">
// //             <Gantt tasks={data}/>
// //              </div>
// //         </div>
// //      );
// //     }
// //  }
// //  export default App;

// import React, { Component } from 'react';
// import Gantt from './Components/Gantt/gantt';
// // import Toolbar from './components/Toolbar';
// // import MessageArea from './components/MessageArea';
// import './App.css';
// import Routing from './Components/routing/routing';

// const data = {
//     data: [

//         { id: 1, text: 'Task #1', start_date: "'1000-02-12'", duration: 0, progress: 0 },
//         { id: 2, text: 'Task #1', start_date: '2020-02-12', duration: 3, progress: 0.6, priority: "high" },
//         { id: 3, text: 'Task #2', start_date: '2020-04-16', duration: 3, progress: 0.4, priority: "high" },
//         { id: 4, text: 'Task #2', start_date: '2100-04-16', duration: 1, progress: 1 }
//     ],

//     links: [
//         { id: 1, source: 1, target: 2, type: '0' }
//     ]
// };
// class App extends Component {
//     state = {
//         currentZoom: 'Days',
//         messages: []
//     };

//     addMessage(message) {
//         const maxLogLength = 5;
//         const newMessate = { message };
//         const messages = [
//             newMessate,
//             ...this.state.messages
//         ];

//         if (messages.length > maxLogLength) {
//             messages.length = maxLogLength;
//         }
//         this.setState({ messages });
//     }

//     logDataUpdate = (type, action, item, id) => {
//         let text = item && item.text ? ` (${item.text})` : '';
//         let message = `${type} ${action}: ${id} ${text}`;
//         if (type === 'link' && action !== 'delete') {
//             message += ` ( source: ${item.source}, target: ${item.target} )`;
//         }
//         this.addMessage(message);
//     }

//     handleZoomChange = (zoom) => {
//         this.setState({
//             currentZoom: zoom
//         });
//     }

//     render() {
//         const { currentZoom, messages } = this.state;
//         return (
//             <div>
//                 <Routing></Routing>
//                 <div className="zoom-bar">
//                     {/* <Toolbar
//             zoom={currentZoom}
//             onZoomChange={this.handleZoomChange}
//           /> */}
//                 </div>
//                 <div className="gantt-container">
//                     <Gantt
//                         tasks={data}
//                         zoom={currentZoom}
//                         onDataUpdated={this.logDataUpdate}
//                     />
//                 </div>
//                 {/* <MessageArea
//           messages={messages}
//         /> */}
//             </div>
//         );
//     }
// }

// export default App;

import React, { Component } from 'react';
import Gantt from './Components/Gantt/gantt';
// import Toolbar from './components/Toolbar';
// import MessageArea from './components/MessageArea';
import './App.css';
import Routing from './Components/routing/routing';

const data = {
    data: [

        { id: 1, text: 'Task #1', start_date: "'1000-02-12'", duration: 5, progress: 1 },
        { id: 2, text: 'Task #2', start_date: '2020-02-12', duration: 3, progress: 0.6 },
        { id: 3, text: 'Task #3', start_date: '2021-04-16', duration: 4, progress: 0.4 },
        { id: 4, text: 'Task #4', start_date: '2100-04-16', duration: 1, progress: 1 }
    ],

    links: [
        { id: 1, source: 1, target: 4, type: '0' }
    ]
};
class App extends Component {
    state = {
        currentZoom: 'Days',
        messages: []
    };

    addMessage(message) {
        const maxLogLength = 5;
        const newMessate = { message };
        const messages = [
            newMessate,
            ...this.state.messages
        ];

        if (messages.length > maxLogLength) {
            messages.length = maxLogLength;
        }
        this.setState({ messages });
    }

    logDataUpdate = (type, action, item, id) => {
        let text = item && item.text ? ` (${item.text})` : '';
        let message = `${type} ${action}: ${id} ${text}`;
        if (type === 'link' && action !== 'delete') {
            message += ` ( source: ${item.source}, target: ${item.target} )`;
        }
        this.addMessage(message);
    }

    handleZoomChange = (zoom) => {
        this.setState({
            currentZoom: zoom
        });
    }

    render() {
        const { currentZoom, messages } = this.state;
        return (
            <div className="row">
                <div className="col-2"></div>
                <Routing></Routing>
                <div className="zoom-bar">
                    {/* <Toolbar
            zoom={currentZoom}
            onZoomChange={this.handleZoomChange}
          /> */}
                </div>
                <div className="col-2 gantt-container">
                    <Gantt
                        tasks={data}
                        zoom={currentZoom}
                        onDataUpdated={this.logDataUpdate}
                    />
                </div>
                {/* <MessageArea
          messages={messages}
        /> */}
            </div>
        );
    }
}

export default App;

