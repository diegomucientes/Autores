import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuthorForm from './components/AuthorForm';
import Update from './views/Update';
import Create from './views/Create';
import Main from './views/Main';
import Detail from './views/Detail';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/author/:id/edit">
            <Update />
          </Route>
          <Route path="/author/:id" >
            <Detail />
          </Route>
          <Route path="/new">
            <Create/>
          </Route>
          <Route path="/">
            <h1>Favourite Authors</h1>
            <h2>We have quotes by</h2>
            <Main/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
