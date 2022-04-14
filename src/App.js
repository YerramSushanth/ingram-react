import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
import {Department} from './Department';
import {Employee} from './Employee';
import {Navigation} from './Navigation';

import{BrowserRouter, Route, Routes, Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h3 className='m-3 d-flex justify-content-center'>
          React JS Tutorial</h3>
          <Navigation></Navigation>

          {/* <Switch>
            <Route path='/' component = {Home} exact />
            <Route path='/department' component={Department} />
            <Route path='/employee' component={Employee} />
          </Switch> */}
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/department" exact={true} element={<Department />} />
            <Route path="/employee" exact={true} element={<Employee />} />
          </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;
