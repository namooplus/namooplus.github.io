import React, { useState } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

import IntroPage from "./component/pages/IntroPage/index";
import ListPage from "./component/pages/ListPage/index";
import PostPage from "./component/pages/PostPage/index";
import ErrorPage from "./component/pages/ErrorPage/index";

import { Container, Group } from "./App.component";

function App() 
{
  const [isHeaderCollapsed, setHeaderCollapsed] = useState(true);
  const currentLocation = useLocation();

  return (
    <Container.Base>
      {/* 헤더 */}
      <Group.Header collapsed={isHeaderCollapsed} setCollapsed={setHeaderCollapsed} currentPath={currentLocation.pathname}/>
      {/* 내용 */}
      <Switch>
        <Route exact path="/" component={IntroPage}/>
        <Route exact path="/blog" component={() => <ListPage type="blog"/>}/>
        <Route exact path="/project" component={() => <ListPage type="project"/>}/>
        <Route exact path="/post/:postId" component={PostPage}/>
        <Route exact path="/error" component={ErrorPage}/>
        <Route component={() => <Redirect to="/error"/>}/>
      </Switch>
    </Container.Base>
  );
}

export default App;