import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";

import IntroPage from "./component/pages/IntroPage/index";
import BlogPage from "./component/pages/BlogPage/index";
import ProjectPage from "./component/pages/ProjectPage/index";
import PostPage from "./component/pages/PostPage/index";
import ErrorPage from "./component/pages/ErrorPage/index";

import {
  Container, 
  Header, Greeting, Title1, Title2, MenuLayout,
  ContentLayout,
  Pencil
} from "./App.style";
import IconButton from "./component/common/IconButton";
import PencilIcon from "./image/pencil.PNG";
import { BsChevronLeft } from "react-icons/bs";

function App() 
{
  // Header sizing
  const [isHeaderCollapsed, setHeaderCollapsed] = useState(false);
  const handleCollapse = (state) => setHeaderCollapsed(state);

  return (
    <Router>
      <Container>
        {/* 헤더 */}
        <Header collapse={isHeaderCollapsed}>
          <Greeting collapse={isHeaderCollapsed}>안녕하세요!<br/>저는<br/>ㅤㅤ입니다.</Greeting>
          <Title1 collapse={isHeaderCollapsed}>나무</Title1>
          <Title2 collapse={isHeaderCollapsed}>노트</Title2>
          <MenuLayout collapse={isHeaderCollapsed}>
            <Link to="/"><IconButton icon={BsChevronLeft} size="1.7rem" color="white"/></Link>
          </MenuLayout>
        </Header>
        {/* 내용 */}
        <ContentLayout>
          <Switch>
            <Route exact path="/" component={() => <IntroPage setHeaderCollapsed={handleCollapse}/>}/>
            <Route exact path="/blog" component={() => <BlogPage setHeaderCollapsed={handleCollapse}/>}/>
            <Route exact path="/project" component={() => <ProjectPage setHeaderCollapsed={handleCollapse}/>}/>
            <Route exact path="/post/:postId" component={() => <PostPage setHeaderCollapsed={handleCollapse}/>}/>
            <Route exact path="/error" component={() => <ErrorPage setHeaderCollapsed={handleCollapse}/>}/>
            <Route component={() => <Redirect to="/error"/>}/>
          </Switch>
        </ContentLayout>
        {/* 오버레이 */}
        <Pencil src={PencilIcon} collapse={isHeaderCollapsed}/>
      </Container>
    </Router>
  );
}

export default App;