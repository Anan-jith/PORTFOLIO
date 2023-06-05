

import Port from './Port';
import {BrowserRouter,Outlet,Route,Routes} from "react-router-dom"
import New from './New';


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
<Route path='/' element={<Port/>}/>
<Route path='/new' element={<New/>}/>
      </Routes>
      
      </BrowserRouter>
      
    </div>

  );
}

export default App;
