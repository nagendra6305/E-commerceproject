import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Localstorage from './localstore';
import Login from './Login';
import Homepage from './Homepage';
import Api from './Api';
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './ProductDetails';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
<Route  path="/signup" element={<Localstorage/>}></Route>
<Route  path="/login" element={<Login/>}></Route>
<Route  path="/fetch" element={<Api/>}></Route>
<Route path='/products/:id'   element={<Details/>}></Route>
        
      </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
