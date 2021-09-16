import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import ActualizaPersonaComponet from './components/ActualizaPersonaComponet';
import BorrarPersonaComponent from './components/BorrarPersonaComponent';
import HeaderComponent from './components/HeaderComponet';
import PersonaComponent from './components/ListaPersonaComponent';
import NuevaPersonaComponent from './components/NuevaPersonaComponet';
import LoginComponet from './components/LoginComponet';

function App() {
    
  return (
    <div>
      <Router>
        <div className="cointainer">
          <HeaderComponent />
          <div className="coinatiner">
            <Switch>
              <Route path="/" exact component={PersonaComponent}></Route>
              <Route path="/personas" component={PersonaComponent}></Route>
              <Route path="/add-personas" component={NuevaPersonaComponent}></Route>
              <Route path="/upd-personas/:id" component={ActualizaPersonaComponet}></Route>
              <Route path="/del-personas/:id" component={BorrarPersonaComponent}></Route>
              <Route path="/login"  component={LoginComponet}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
