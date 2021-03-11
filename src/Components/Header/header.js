import react from 'react';
import './header.css'
import workspaces from '../Gantt/workspace.json'

export default function Header() {
  const allWorkspace = { workspaces };
  const allProjects = allWorkspace.workspaces.workspaces.projects;
  // const colorCircle=allProjects.workspaces.workspaces.projects
  console.log(allProjects);
  const arr = []
  allProjects.map((item, index) => {
    arr[index] = item.name;
  })
  console.log(arr);
  //const numbers = props.numbers;
  // const listItemsProjectName = arr.map((number) =>
  //   // <li>{number}</li>
  //   <li>{number}</li>
    
  // );
 

  return (
    <>
      {/* {arr.map((item, index) => {
        <ul>
          <l1><h1>{item}</h1></l1>
        </ul>
      })} */}

      
      <div className="container ">
        <div className="row  header2">

        </div>

        <div className="row header1">
          <div className="col-3">
            <div className="btn-group">

              <div className="dropBtn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Projects
                   </div>

              <div className="   dropContainer dropdown-menu dropdown-menu-right container ">

                <div className="row">
                  <div className="col">

                  </div>
                 
                  {allProjects.map((project) =>
                 
                   <div className=" itemCircle"
                   style= {{backgroundColor:project.color? project.color :"blue"}}
                    >
                      
                  {project.name[0]} 
                  <button className=" dropdown-item dropItem " type="button">{project.name}</button>
                  {/* </> */}
                      </div>
                     
                     
  // <li>{number}</li>
                          )
  

                  }
                  
                 
                  <div className="col-8">
                   
                  </div>

                </div>
                <div className="row">
                  <div className="col">

                  </div>
                  
                  {/* <div className="col-8">
                    <button className=" dropdown-item dropItem " type="button">Action2</button>
                  </div> */}

                </div>
                {/* <button className="dropdown-item dropItem" type="button">Another action</button>
                     <button className="dropdown-item dropItem" type="button">Something else here</button> */}
              </div>
            </div>
          </div>
          <div className="col-3">

          </div> <div className="col-3">

          </div>
          <div className="col-3 gantt">
            Gantt
    </div>
        </div>
      </div>
    </>

  );
}