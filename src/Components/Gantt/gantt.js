import React, { Component } from 'react';
import { gantt } from 'dhtmlx-gantt';
import './gantt.css';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
import '../Gantt/gantt.css';
import { Redirect } from 'react-router';
import { ResizeProvider, ResizeConsumer } from 'react-resize-context'

export default class Gantt extends Component {

    constructor(props) {
        debugger
        super(props);
        this.initZoom();
        console.log("aaqes",this.props.theCards)
    }


    dataProcessor = null;

    initZoom() {
        gantt.ext.zoom.init({
            levels: [

                {
                    name: 'Days',
                    scale_height: 60,
                    min_column_width: 40,

                    scales: [

                        { unit: "month", step: 1, format: "%F %Y" },
                        { unit: "day", step: 1, format: "%j" }
                    ]
                },
            ]
        });
    }

    setZoom(value) {
        gantt.ext.zoom.setLevel(value);
    }

    initGanttDataProcessor() {
        const onDataUpdated = this.props.onDataUpdated;

    }


    componentDidMount() {


        gantt.attachEvent("onBeforeTaskDisplay", function (id, task) {
            if (task.priority == "high") {
                return true;
            }
            return false;
        });
        gantt.config.xml_date = "%Y-%m-%d %H:%i";
        const { tasks } = this.props;
        gantt.init(this.ganttContainer);
        this.initGanttDataProcessor();
        gantt.parse(tasks);

        gantt.templates.scale_cell_class = function (date) {

            return "weekend";
        }
        gantt.templates.task_class = function (start, end, task) {
            if (task.progress > 0 && task.progress < 1) {
                return task.class = "pinkBorder";
            }
            if (task.progress === 1) {
                return task.class = "greenBorder";
            }
            else {
                return task.class = "orangeBorder";
            }
        };
        gantt.templates.task_text = function (start, end, task) {
            if (task.progress > 1) {
                return task.text;
            }
            else {
                return task.text + " " + `<b>${(task.progress) * 100}%</b>`;
            }
        };
        gantt.templates.gantt_cell = function (start, end, task) {
            return task.text = "knkl";
        }

        gantt.templates.grid_row_class = function (columnName, column) {
            return "ll"

        };


        /////////////////////////////////////////////////
        // gantt.templates = function(columnName, column){
        //    alert("hjjhj")
        //   };
        // gantt.attachEvent("onTaskDrag", function(id, mode, task, original){
        //     gantt.templates.task_class  = function(start, end, task){
        //         // return task.class = "txtAlign"
        //     };  
        // });
        // gantt.attachEvent("onBeforeTaskDrag", function(id, mode, e){
        //     if(gantt.getGlobalTaskIndex(id)%2==1){
        //         alert("jhjhj")      //denies dragging if the global task index is odd
        //     }
        //     return true;           //allows dragging if the global task index is even
        // });
        // gantt.attachEvent("onAfterTaskDrag", function(id, mode, e, task){

        //     alert(task)
        //     //any custom logic here
        // });

        // gantt.templates.gantt_task_drag=function(start,end,task){
        //     alert("knknk")
        // }
        gantt.templates.tooltip_date_format = function (date) {
            var formatFunc = gantt.date.date_to_str("%Y-%m-%d");
            return formatFunc(date);
        };


        

     
        



        
            gantt.templates.grid_row_class = function(start, end, task){
                debugger
                //let root = document.documentElement;


               //root.style.setProperty('--text', "k");
              //document.documentElement.style.setProperty('--text', '#YOURCOLOR');
             // document.documentElement.style.setProperty('--text', 'kk');
                return "upColor";
             // document.querySelector('.upColor').setPropertyValue('--text',`$`);
             
   

            }


           // document.documentElement.style.setProperty('--text', 'none');
            //document.querySelector('.upColor').setPropertyValue('--text',`kkll`);
        //    console.log("nbnb", document.getElementsByClassName('upColor'));
        //   let a;
        // debugger
        //     let colorArray = ["#aa3333", "#33aa33", "#3333aa", "#aaaa33", "#33aaaa", "#aa33aa", "#aa6633", "#66aa33", "#33aa66"];
        //    a=document.getElementsByClassName('upColor');
        //  console.log("adadea",a)

        // // var domArray = jQuery.makeArray(a);
        // // let arry = Array.from(a)

        //  //console.log(":b",htmlCollection)
        // console.log(a)
        //    let elements = document.getElementsByClassName('upColor'); // get all elements
	    //      for(var i = 0; i < a.length; i++){
	    //     	elements[i].style.backgroundColor = colorArray[i];
	
           // .style.backgroundColor = "pink";

//gantt.style(                "background-color:navy;color:white; font-weight:bold;", "","color:red;", "")
            //this.ganttContainer.style("background-color:navy;color:white; font-weight:bold;", "","color:red;", "")

           // gantt.setRowColor("row1","red");
            
            // goog.require('goog.cssom');
            // var css_node = goog.cssom.addCssText('.cssClass { color: #F00; }');
        // gantt.config.layout = {
        //     css: "gantt_container",
        //      rows: [
        //      {
        //       cols: [
        //        {view: "grid", id: "grid", scrollX: "scrollHor", scrollY: "scrollVer"},
        //        {view: "timeline", id: "timeline", scrollX: "scrollHor", scrollY: "scrollVer"},
        //        {view: "scrollbar", id: "scrollVer"}
        //       ]
        //      },
        //      {view: "scrollbar", id: "scrollHor"}
        //     ]
        //    };

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

            <div ref={(input) => { this.ganttContainer = input }}
                style={{ width: '100%', height: '100%' }}>
            </div>
        );
    }
}

