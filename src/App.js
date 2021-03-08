import React, { Component } from "react";
import ReactDOM from "react-dom";

import TimeLine from "react-gantt-timeline";
import MyGant from "./Components/Gantt/myGant";
// import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    let d1 = new Date();
    let d2 = new Date();
    d2.setDate(d2.getDate() + 5);
    let d3 = new Date();
    d3.setDate(d3.getDate() + 8);
    let d4 = new Date();
    d4.setDate(d4.getDate() + 20);
    let d5 = new Date();
    d5.setDate(d5.getDate() + 25);
    let d6 = new Date();
    d6.setDate(d6.getDate() + 28);
    this.data = [
      {
        id: 1,
        start: d1,
        end: d5,
        name: "Demo Task 1",
        color:"blue",

      },
      {
        id: 2,
        start: d3,
        end: d4,
        name: "Demo Task 2",
        color: "pink"
      },
      {
        id: 2,
        start: d2,
        end: d5,
        name: "Demo Task 2",
        color: "orange"
      },
      {
        id: 2,
        start: d4,
        end: d5,
        name: "Demo Task 2",
        color: "pink"
      },
      {
        id: 2,
        start: d5,
        end: d6,
        name: "Demo Task 2",
        color: "blue"
      },
      {
        id: 2,
        start: d2,
        end: d6,
        name: "Demo Task 2",
        color: "orange"
      }
    ];
    this.links = [{ id: 1, start: 1, end: 2 }];
  }

  render() {
    return (
      <div className="app-container">
        
        {/* DayWidth<input type="range" min="30" max="500" value={this.state.daysWidth} onChange={this.handleDayWidth} step="1"/>
       Item Height<input type="range" min="30" max="500" value={this.state.itemheight} onChange={this.handleItemHeight} step="1"/> */}
        <div className="time-line-container">
          <TimeLine data={this.data} links={this.links} />
        </div>
        <h1>the data</h1>
        <MyGant></MyGant>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
