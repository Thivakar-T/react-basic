import React from 'react'
// import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import Employee from './component/Employee';
import Footer from './component/Footer';
import Header from './component/Header';
import ListEmployee from './component/ListEmployee';

function App() {
  return (
    <div className="App" >
      <Router>
        <div className='container'>
          <Header/>
          <div className='container'>
            <Switch>
            <Route path='/' exact component={ListEmployee}/>
            <Route path='/list' component={ListEmployee}/>
            {/* <Route path='/add' component={Employee}/> */}
            <Route path='/add/:id' component={Employee}/>
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
