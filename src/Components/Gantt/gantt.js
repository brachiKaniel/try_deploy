// // import React, { useState, useEffect } from "react";
// // import ReactDOM from "react-dom"
// // import TimeLine from "react-gantt-timeline";
// // import workspaces from './workspace.json'
// // import './gantt.css'
// // import { useParams } from "react-router";
// // import moment from 'moment';

// // export default function Gantt(props) {
// // debugger
// // const projectName = useParams()
// // console.log(projectName);

// // debugger

// // const allWorkspace = { workspaces };
// // const allTheWorkspaces = allWorkspace.workspaces.workspaces.projects;

// // const theCards = []
// // const theTasks = []

// // allTheWorkspaces.map((item, index) => {
// //     {

// //         item.name === projectName.projectName ? item.cards.map((item, index) => {
// //             { theCards.push(item); }
// //         })
// //             : console.log("bed", item.cards);
// //     }
// // })
// // console.log("now", theCards);

// // {
// //     theCards ? theCards.map((item, index) => {
// //         item.tasks.map((item, index) => {
// //             console.log("oooooooppppppp", item);
// //             theTasks.push(item)
// //         })
// //     }) : theTasks.push(null)

// // }

// // console.log("oo", theCards);


// // debugger
// // console.log("the cards", theCards);
// // console.log("the tasks", theTasks);

// // theTasks.map((item, index) => {
// //     item.start = moment(item.start, "MM-DD-YYYY").toDate();
// //     item.end = moment(item.end, "MM-DD-YYYY").toDate();
// // })
// // console.log(theTasks);
// //     return (
// //         <>
// //             {/* <div className="row">
// //                 <div className="col-2"></div>
// //                 <div className="col-1 Card">
// //                     <div className="row nav">The Cards</div>
// //                     {theCards ?

// //                         theCards.map((item) =>
// //                             <>
// //                                 <hr></hr>
// //                                 <h1 className="cradsName">{item.name}</h1>
// //                             </>

// //                         ) : <h1 className="Card">no cards</h1>}
// //                 </div>
// //                 <div className="col-4">
// //                     < div className="time-line-container gantBody" style={{ borderRadius: "20px" }}>
// //                         <TimeLine data={theTasks} />
// //                     </div>
// //                 </div>
// //             </div> */}
// //         </>
// //     );
// // }

// import React, { Component, useEffect } from 'react';
// import { gantt } from 'dhtmlx-gantt';
// import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
// import './gantt.css';
// import workspaces from './workspace.json'


// export default function Gantt() {
//     debugger
//     useEffect(() => {
//         const { tasks } = props;
//         // gantt.init(this.ganttContainer);
//         // gantt.parse(tasks);
//     });
//     // componentDidMount() {
//     //     debugger


//     // }



//     return (
//         <div className="gantBody"
//             ref={(input) => { this.ganttContainer = input }}

//         ></div>
//     );
// }


// import React, { Component } from 'react';
// import { gantt } from 'dhtmlx-gantt';
// import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';

// export default class Gantt extends Component {

//   constructor(props) {
//     super(props);
//     this.initZoom();
//   }

//   // instance of gantt.dataProcessor
//   dataProcessor = null;

//   initZoom() {
//     gantt.ext.zoom.init({
//       levels: [
//         {
//           name: 'Hours',
//           scale_height: 60,
//           min_column_width: 30,
//           scales: [
//             { unit: 'day', step: 1, format: '%d %M' },
//             { unit: 'hour', step: 1, format: '%H' }
//           ]
//         },
//         {
//           name: 'Days',
//           scale_height: 60,
//           min_column_width: 70,
//           scales: [

//             {unit: "month", step: 1, format: "%F, %Y"},
//              {unit: "day", step: 1, format: "%j, %D"}
//             // { unit: 'month', step: 1, format: 'month #%W' },
//             // { unit: 'week', step: 1, format: 'Week #%W' },
//             // { unit: 'day', step: 1, format: '%d %M' }
//           ]
//         },
//         {
//           name: 'Months',
//           scale_height: 60,
//           min_column_width: 70,
//           scales: [
//             { unit: "month", step: 1, format: '%F' },
//             { unit: 'week', step: 1, format: '#%W' }
//           ]
//         }
//       ]
//     });
//   }

//   setZoom(value) {
//     gantt.ext.zoom.setLevel(value);
//   }

//   initGanttDataProcessor() {
//     /**
//      * type: "task"|"link"
//      * action: "create"|"update"|"delete"
//      * item: data object object
//      */
//     const onDataUpdated = this.props.onDataUpdated;
//     this.dataProcessor = gantt.createDataProcessor((type, action, item, id) => {
//       return new Promise((resolve, reject) => {
//         if (onDataUpdated) {
//           onDataUpdated(type, action, item, id);
//         }

//         // if onDataUpdated changes returns a permanent id of the created item, you can return it from here so dhtmlxGantt could apply it
//         // resolve({id: databaseId});
//         return resolve();
//       });
//     });
//   }

//   shouldComponentUpdate(nextProps) {
//     return this.props.zoom !== nextProps.zoom;
//   }

//   componentDidMount() {
//     gantt.config.xml_date = "%Y-%m-%d %H:%i";
//     const { tasks } = this.props;
//     gantt.init(this.ganttContainer);
//     this.initGanttDataProcessor();
//     gantt.parse(tasks);
//   }

//   componentWillUnmount() {
//     if (this.dataProcessor) {
//       this.dataProcessor.destructor();
//       this.dataProcessor = null;
//     }
//   }

//   render() {

//     return (
//       <div
//         ref={(input) => { this.ganttContainer = input }}
//         style={{ width: '100%', height: '100%' }}
//       ></div>
//     );
//   }
// }

import React, { Component } from 'react';
import { gantt } from 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';

export default class Gantt extends Component {

    constructor(props) {
        debugger
        super(props);
        this.initZoom();
    }

    // instance of gantt.dataProcessor
    dataProcessor = null;

    initZoom() {
        gantt.ext.zoom.init({
            levels: [
                {
                    name: 'Hours',
                    scale_height: 60,
                    min_column_width: 30,
                    scales: [
                        { unit: 'day', step: 1, format: '%d %M' },
                        { unit: 'hour', step: 1, format: '%H' }
                    ]
                },
                {
                    name: 'Days',
                    scale_height: 60,
                    min_column_width: 70,
                    scales: [

                        { unit: "month", step: 1, format: "%F, %Y" },
                        { unit: "day", step: 1, format: "%j, %D" }
                        // { unit: 'month', step: 1, format: 'month #%W' },
                        // { unit: 'week', step: 1, format: 'Week #%W' },
                        // { unit: 'day', step: 1, format: '%d %M' }
                    ]
                },
                {
                    name: 'Months',
                    scale_height: 60,
                    min_column_width: 70,
                    scales: [
                        { unit: "month", step: 1, format: '%F' },
                        { unit: 'week', step: 1, format: '#%W' }
                    ]
                }
            ]
        });
    }

    setZoom(value) {
        gantt.ext.zoom.setLevel(value);
    }

    initGanttDataProcessor() {
        /**
         * type: "task"|"link"
         * action: "create"|"update"|"delete"
         * item: data object object
         */
        const onDataUpdated = this.props.onDataUpdated;
        this.dataProcessor = gantt.createDataProcessor((type, action, item, id) => {
            return new Promise((resolve, reject) => {
                if (onDataUpdated) {
                    onDataUpdated(type, action, item, id);
                }

                // if onDataUpdated changes returns a permanent id of the created item, you can return it from here so dhtmlxGantt could apply it
                // resolve({id: databaseId});
                return resolve();
            });
        });
    }

    shouldComponentUpdate(nextProps) {
        return this.props.zoom !== nextProps.zoom;
    }

    componentDidMount() {
        // gantt.attachEvent("onBeforeTaskDisplay", function (id, task) {
            // if (task.priority == "high") {
                // return true;
            // }
            // return false;
        // });
        gantt.config.xml_date = "%Y-%m-%d %H:%i";
        const { tasks } = this.props;
        gantt.init(this.ganttContainer);
        this.initGanttDataProcessor();
        gantt.parse(tasks);
    }

    componentWillUnmount() {
        if (this.dataProcessor) {
            this.dataProcessor.destructor();
            this.dataProcessor = null;
        }
    }

    render() {
        const { zoom } = this.props;
        this.setZoom(zoom);
        return (
            <div
                ref={(input) => { this.ganttContainer = input }}
            // style={{ width: '100%', height: '100%' }}
            ></div>
        );
    }
}
