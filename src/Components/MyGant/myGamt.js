import react from 'react';
import TimeLine from 'react-gantt-timeline'

export default function MyGant() {

    let d1 = new Date();
    let d2 = new Date();
    d2.setDate(d2.getDate() + 4);
    let d3 = new Date();
    d3.setDate(d3.getDate() + 8);
    let d4 = new Date();
    d4.setDate(d4.getDate() + 20);
     let data1 = [
      {
        id: 1,
        start: d1,
        end: d2,
        name: "Demo Task 1"
      },
      {
        id: 2,
        start: d3,
        end: d4,
        name: "Demo Task 2",
        color: "orange"
      }
    ];
   let links1 = [{ id: 1, start: 1, end: 2 }];
    
    return (

        <>
        <div className="container " >
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
           <TimeLine data={data1} links={links1} />
           </div>
           <div className="col-1"></div>
         </div>
        </div>
        </>
         
    );
}