import react from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/actions/action';
export default function Gantt() {
    debugger
    
    const dispatch = useDispatch();
    dispatch(actions.getAllWorkspacesFromServer());
    const workspaces = useSelector(state=>state.public_reducer.workspaces);
    alert(workspaces)
    // console.log(workspaces);
    // dispatch(actions.getProjectByIdInServer());
    // const projects =useSelector(state=>state.public_reducer.projects);
    // console.log("okpotjhiyoi",projects);
   
    return (
        <div>
            <h1>hello</h1>
            {/* <button onClick={dispatch(actions.projects)}></button> */}
        </div>
    );
}