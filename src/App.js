import Home from "./components/common/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Test from "./components/Test";
import Result from "./components/Result";
import Error from "./components/Error";
import "./shared/reset.scss";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>리액트 헬멧을 이용한 타이틀 변경</title>
      </Helmet>
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
