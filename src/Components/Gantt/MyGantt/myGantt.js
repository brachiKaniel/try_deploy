import react from 'react';
// import Projects from './Project/project';
// import { useDispatch, useSelector } from 'react-redux';
// import { actions } from '../../redux/actions/action';
import './myGantt.css'
import workspace from '../workspace.json'
export default function MyGant() {

    // console.log({workspace}.projects);
    let projectWorkspaces = { workspace };
    let allProjects = projectWorkspaces.workspace.workspaces.projects;
    // console.log(projectWorkspaces);
    //console.log("ggg", projectWorkspaces.workspace.workspaces.projects[0].cards);
    return (



            <div className="gantBody">
                {allProjects.map((item, index) => (
                        <tr key={index}>
                            <td >
                                {console.log(item)}
                                {/* <h3>Project name:</h3>
                                {item.name} */}
                                {/* <h4>project cards:</h4> */}
                                {item.cards.map((item, index) => (
                                    <p>{item.name}
                                        {/* <h5>project tasks</h5> */}
                                        {item.tasks.map((item, index) => (
                                            <></>
                                            // <li>{"task  " + item.startDate}</li>
                                        ))}
                                    </p>
                                ))}
                            </td>
                        </tr>
                    ))}
                </div>


    );
}

// import React, { Component } from 'react';
// import { gantt } from 'dhtmlx-gantt';
// import workspace from '../workspace.json'
// import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
// import './myGantt.css';

// let projectWorkspaces = { workspace };

// const allProjects = projectWorkspaces.workspace.workspaces.projects;

// export default class MyGantt extends Component {

//     componentDidMount() {
       
//         const { tasks } = this.props;
//         gantt.init(this.ganttContainer);
//         gantt.parse(tasks);
//     }

//     render() {
//         return (
//             <>
//                 <div className="row gantBody">
//                     {/* <div className="col-3">
//                     {allProjects.map((item, index) => (
//                         <tr key={index}>
//                             <td >
//                                 {console.log(item)} */}
//                     {/* <h3>Project name:</h3>
//                         {item.name} */}
//                     {/* <h4>project cards:</h4> */}
//                     {/* {item.cards.map((item, index) => (
//                                     <p>{item.name} */}
//                     {/* <h5>project tasks</h5> */}
//                     {/* {item.tasks.map((item, index) => ( */}
//                     <></>
//                     {/* <li>{"task  " + item.startDate}</li> */}
//                     {/* ))}
//                                     </p>
//                                 ))}
//                             </td>
//                         </tr>
//                     ))}
//                     </div> */}
//                     <div
//                         ref={(input) => { this.ganttContainer = input }}
//                         style={{ width: '100%', height: '100%' }}
//                     ></div>

//                 </div>

//             </>
//         );
//     }
// }