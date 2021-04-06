import React, { Component } from 'react';
import { gantt } from 'dhtmlx-gantt';
import './gantt.css'
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
import '../Gantt/gantt.css'
import { Redirect } from 'react-router';

export default class Gantt extends Component {

    constructor(props) {
        debugger
        super(props);
        this.initZoom();
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
        gantt.templates.task_class  = function(start, end, task){
            if(task.progress>0 && task.progress<1){
                return task.class="pinkBorder"; 
            }
            if(task.progress===1){
                return task.class="greenBorder";
            }
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
        gantt.templates.tooltip_date_format=function (date){
            var formatFunc = gantt.date.date_to_str("%Y-%m-%d");
            return formatFunc(date);
        };
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

