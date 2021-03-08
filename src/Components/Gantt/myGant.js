import react from 'react';
// import Projects from './Project/project';
// import { useDispatch, useSelector } from 'react-redux';
// import { actions } from '../../redux/actions/action';
import workspace from './workspace.json'
export default function MyGant() {
    debugger
    // console.log({workspace}.projects);
    let projectWorkspaces = { workspace };
    let allProjects = projectWorkspaces.workspace.workspaces.projects;
   // console.log(projectWorkspaces);
    //console.log("ggg", projectWorkspaces.workspace.workspaces.projects[0].cards);
  
   


    return (
        <div>
            
          <table style={{ width: '100%', alignItems: 'center', textAlign: 'center' }} className="table table-bordered table-hover">
               
                {allProjects.map((item, index) => (
                   
                    
                    <tr key={index}>
                       <td >
                         
                      
                       {console.log(item)}
                       <h3>Project name:</h3>
                       {item.name}
                       <h4>project cards:</h4> 
                       {item.cards.map((item, index) => (
                       <li>{item.name}
                       <h5>project tasks</h5> 
                       {item.tasks.map((item, index) => (
                       <li>{"task  "+ item.name}</li>

                         ))}
                                  
                 </li>
                 
             
                       ))}
                      
                       </td> 
                    </tr>
                ))}
            </table>
            
            
     
        </div>
    );
}