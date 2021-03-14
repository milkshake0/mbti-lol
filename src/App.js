import Home from "./components/common/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Test from "./components/Test";
import Result from "./components/Result";
import Error from "./components/Error";
import "./components/shared/reset.scss";
import "./components/shared/style.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/test/:step?" component={Test} />
          <Route path="/result" component={Result} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
