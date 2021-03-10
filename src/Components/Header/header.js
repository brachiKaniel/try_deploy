import react from 'react';
import './header.css'
import workspaces from '../Gantt/workspace.json'


export default function Header() {
  debugger
  const allWorkspace = { workspaces };

  const allProjects = allWorkspace.workspaces.workspaces.projects;
  console.log(allProjects);


  return (
    <>

      <div>jkbj</div>

      <div className="container ">
        <div className="row  header2">

          {/* <div className="dropdown-menu">
            <h6 className="dropdown-header">Dropdown header</h6>
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
          </div> */}


        </div>

        <div className="row header1">
          <div className="col-3">
            {allProjects.map((item, index) => {
              <h1>{item.name}</h1>

            })}
            <div className="btn-group">


              <div>
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {allProjects.map((item, index) => {
                      <p className="dropdown-item">{item.name}</p>
                    })}
                    {/* <p class="dropdown-item">Action</p>
                    <p class="dropdown-item">Another action</p>
                    <p class="dropdown-item">Something else here</p> */}
                  </div>
                </div>
                {/* <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Projects
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    
                  </div>
                </div> */}
                {/*  Projects
                   </div> */}

                {/* <div className="   dropContainer dropdown-menu dropdown-menu-right container ">

                <div className="row">
                  <div className="col">

                  </div>
                  <div className="col itemCircle">
                    d
                     </div>
                  <div className="col-8">
                    <button className=" dropdown-item dropItem " type="button">Action1</button>
                  </div>

                </div>
                <div className="row">
                  <div className="col">

                  </div>
                  <div className="col itemCircle">
                    d
                     </div>
                  <div className="col-8">
                    <button className=" dropdown-item dropItem " type="button">Action2</button>
                  </div>

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