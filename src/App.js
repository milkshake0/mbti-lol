import react from "react";
import Home from "./components/common/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Test1 from "./components/Test1";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/test/1" component={Test1} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
