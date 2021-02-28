
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Solarsytem } from './components/Solarsytem';

function App() {
  return (
       <Router>
      <div className="App">
 
        <Switch>
          <Route exact path="/" component={Solarsytem} />
     
        </Switch>
      </div>
    </Router>
  );
}

export default App;
