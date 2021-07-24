import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import IntroPage from "./component/pages/IntroPage/index";
import PostPage from "./component/pages/PostPage/index";
import ProjectPage from "./component/pages/ProjectPage/index";
import DetailPage from "./component/pages/DetailPage/index";
import ErrorPage from "./component/pages/ErrorPage/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={IntroPage}/>

        <Route exact path="/post" component={PostPage}/>
        <Route exact path="/post/:contentId" component={() => <DetailPage type="post"/>}/>

        <Route exact path="/project" component={ProjectPage}/>
        <Route exact path="/project/:contentId" component={() => <DetailPage type="project"/>}/>

        <Route exact path="/error" component={ErrorPage}/>

        <Route component={() => <Redirect to="/error"/>}/>
      </Switch>
    </Router>
  );
}

export default App;
