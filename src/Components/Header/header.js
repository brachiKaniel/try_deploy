import {react ,useEffect}from 'react';
import './header.css'
import workspaces from '../Gantt/workspace.json'
import Gantt from '../Gantt/gantt'
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route, Link, withRouter, useParams } from "react-router-dom";
export default function Header() {

=======
import { Redirect } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import history from './history'

export default function Header(props) {
  

    // Update the document title using the browser API
    //window.location.reload();

    
  debugger
>>>>>>> dev
  const allWorkspace = { workspaces };
  const allProjects = allWorkspace.workspaces.workspaces.projects;
  const l = "myName";
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

<<<<<<< HEAD
  // );

=======
  // )
  



  // function greetUser(e) {
  //   debugger
  //   console.log( e+  "Hi there, user!");
  // }

// const  handleClick = value => () => {
//     console.log(value.name);
//     debugger
//    // history.push(`/Gantt/${value.name}`) ;
//     return 
//     // <Redirect to='/Gantt/' />
//     <Redirect to={"/Gantt/" + value.name} />
//   };
>>>>>>> dev

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

<<<<<<< HEAD
                    <div className=" itemCircle"
                      style={{ backgroundColor: project.color ? project.color : "blue" }}
                    >

                      {project.name[0]}
                      {/* <Router>
                        <nav style={{ backgroundColor: 'lightBlue' }}>
                          <br></br>
                          <button className=" dropdown-item dropItem " type="button"><Link to={`/Gantt/${project.name}`}>{project.name}</Link></button>
                        </nav>
                        <Switch>
                          <Route path="/Gantt/:name">
                            <Gantt />
                          </Route>
                        </Switch>

                      </Router> */}
=======
                    <div className=" row mt-2"

                    >
                      <div className="col-1  itemCircle ml-3" style={{ backgroundColor: project.color ? project.color : "blue" }}>   {project.name[0]} </div>
                      <div className="col-1 ">


                        <Router>
                          <nav >

                            <Switch>
                              <Route path="/Gantt/:projectName">
                                <Gantt />
                              </Route>
                            </Switch>
                            <button className=" dropdown-item dropItem " 
                            
                             >
                               
                              <Link to={`/Gantt/${project.name}`}>{project.name}</Link>
                            </button>
                           
                            
                          </nav>


                        </Router>






                      </div>


>>>>>>> dev

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