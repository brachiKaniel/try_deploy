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

        const myVar = [1, 2, 3, 4, 5, 6];


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
                return task.class = "greenBorder vv";
            }
            else {
                return task.class = "orangeBorder";
            }
        };
        gantt.templates.gantt_grid_data = function (start, end) {
            return "vv"

        }
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

        // gantt.attachEvent("onBeforeTaskDisplay", function(id, task){
        //     if (task.priority == "high"){
        //         return true;
        //     }
        //     return false;
        // });

        gantt.config.columns = [
            {

                 tree: true, width: 190, min_width: 150, max_width: 300,
                resize: true, align: "center",template:myFunc
            },
        ];
        function myFunc(task){
            if(task.cardName)
                return  `<div class='important'><i  class="material-icons icon  ">
                arrow_drop_down
                </i>${task.cardName}</div>`;
            //return task.text+" ("+task.users+")";
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

        gantt.attachEvent("onGridResizeEnd", function (old_width, new_width) {

            gantt.message("Grid is now <b>" + new_width + "</b>px width");
            return true;
        });
        gantt.config.responsive_lightbox = true; //disabled by default


        // gantt.config.columns = [
        //     { name: "text", tree: true, width: "*", resize: true },//-> 'resize' active
        //     { name: "start_date", resize: true, min_width: 100 },//-> 'resize' limited by 'min_width'
        //     { name: "duration", align: "center" },              //-> no resize
        //     { name: "add", width: "44" }
        // ];

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
    showAlert() {
        alert("bjkbj")
    }


    render() {
        const { zoom } = this.props;
        this.setZoom(zoom);

        return (
            <>
            
                <center>
                    <div ref={(input) => { this.ganttContainer = input }}
                    
                        style={{ width: '100%', height: '100%' }}>
                    </div>

                </center>
<input type="color" value={"#ff6347"}></input>




            </>
        );
    }
}

