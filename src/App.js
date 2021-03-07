import logo from './logo.svg';
import './App.css';
import Gantt from './Components/Gantt/gantt';
import { Provider } from 'react-redux';
import Store from './redux/Store/Store'


function App() {
  return (
      <Provider store={Store}>
        <Gantt></Gantt>
      </Provider>
  );
}

export default App;
