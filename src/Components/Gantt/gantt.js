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
            debugger
            // if(date.getDay()==4||date.getDay()==6){
            return "weekend";
        }
        gantt.templates.task_class  = function(start, end, task){
            if(task.progress>0 && task.progress<1){
                return task.class="pinkBorder"; 
                
                // return task.style.border=task.progressColor;
                
                // gantt.templates.task_class = function(start, end, task){return task.class="pinkBorder";};
                // task.class="redBorder"
            }
            if(task.progress===1){
                return task.class="greenBorder";
                // gantt.templates.task_class = function(start, end, task){return task.class="greenBorder";};
            }
        };
        /////////////////////////////////////////////////
        // when dragging the task
        gantt.attachEvent("onTaskDrag", function(id, mode, task, original){
            return task.class="txtAlign";
         
        });
        
        gantt.templates.gantt_task_drag=function(start,end,task){
            alert("knknk")
        }
        gantt.templates.tooltip_date_format=function (date){
            var formatFunc = gantt.date.date_to_str("%Y-%m-%d");
            return formatFunc(date);
        };
        
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
            <>
                < style={{height:'300px',width:'60px',backgroundColor:'black'}}
             ref={(input) => { this.ganttContainer = input }}
                style={{ width: '100%', height: '100%' }}
            </> 
        );
    }
}

