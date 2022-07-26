import React from "react";
import { Route} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
import { BrowserRouter } from "react-router-dom";

function App() {
  return <div>{/*{code here}*/}
  <NavBar/>
    <BrowserRouter>
    <Route exact path="/actors">
        <Actors/>
      </Route>
    <Route exact path="/directors">
        <Directors/>
      </Route>
    <Route exact path="/movies">
        <Movies/>
      </Route>
      <Route exact path="/">
        <Home/>
      </Route>
      </BrowserRouter>
  </div>;
}

export default App;
