import logo from './logo.svg';
import './App.css';
import Gantt from './Components/Gantt/gantt';
import { Provider } from 'react-redux';
import Store from './redux/Store/Store'
import Header from './Components/Header/header';


function App() {
  return (
    <div className="App">
       <Header></Header>
    </div>
    
      // <Provider store={Store}>
      //   <Gantt></Gantt>
      // </Provider>

     
  );
}

export default App;
