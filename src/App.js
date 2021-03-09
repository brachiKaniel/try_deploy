import logo from './logo.svg';
import './App.css';
import Gantt from './Components/Gantt/gantt';
import { Provider } from 'react-redux';
import Store from './redux/Store/Store'
import Header from './Components/Header/header';
import MyGant from './Components/MyGant/myGamt'

function App() {
  return (
    <div className="App">
      
    
      
       <Header></Header>
     <div>wevcewv</div>
       
       <MyGant></MyGant>
 
       
    </div>
    
      // <Provider store={Store}>
      //   <Gantt></Gantt>
      // </Provider>

     
  );
}

export default App;
