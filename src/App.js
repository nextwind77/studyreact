import React from 'react';
import Navbar from './components/Navbar';
import { HashRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

class App extends React.Component {
  
  render() {
    return (
      <HashRouter>
        <div className="App">
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        </div>
      </HashRouter>
    );
  }
}

  


export default App;
