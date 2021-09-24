
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import ViewPages from "./Components/ViewPages";
import Documentation from "./Components/Documentation";
import Home from "./Components/Home";
import Nav from "./Components/Nav";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path = '/' exact component = {Home}/>
          <Route path = '/viewPages' exact component = {ViewPages}/>
          <Route path = '/documentation' exact component = {Documentation}/>
        </Switch>
       
      </div>
    </Router>
  );
}

export default App;
