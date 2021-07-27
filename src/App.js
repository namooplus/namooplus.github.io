import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";

import IntroPage from "./component/pages/IntroPage/index";
import BlogPage from "./component/pages/BlogPage/index";
import ProjectPage from "./component/pages/ProjectPage/index";
import PostPage from "./component/pages/PostPage/index";
import ErrorPage from "./component/pages/ErrorPage/index";

import styled, { keyframes } from "styled-components";
import IconButton from "./component/common/IconButton";
import PencilIcon from "./image/pencil.PNG";
import { IoChevronBackOutline } from "react-icons/io5";

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
            <Link to="/"><IconButton icon={IoChevronBackOutline} size="2rem" color="white"/></Link>
          </MenuLayout>
        </Header>
        {/* 내용 */}
        <Switch>
          <Route exact path="/" component={() => <IntroPage setHeaderCollapsed={handleCollapse}/>}/>
          <Route exact path="/blog" component={() => <BlogPage setHeaderCollapsed={handleCollapse}/>}/>
          <Route exact path="/project" component={() => <ProjectPage setHeaderCollapsed={handleCollapse}/>}/>
          <Route exact path="/post/:postId" component={() => <PostPage setHeaderCollapsed={handleCollapse}/>}/>
          <Route exact path="/error" component={() => <ErrorPage setHeaderCollapsed={handleCollapse}/>}/>
          <Route component={() => <Redirect to="/error"/>}/>
        </Switch>
        {/* 오버레이 */}
        <Pencil src={PencilIcon} collapse={isHeaderCollapsed}/>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 100vh;

  @media only screen and (max-width: 925px) {
    flex-flow: column nowrap;
  }
`
const Header = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: ${props => props.collapse ? '250px' : '50%'};
  padding: 50px;
  box-sizing: border-box;
  background-color: #21D1C2;
  overflow: hidden;
  transition: width ease 500ms, height ease 500ms;

  @media only screen and (max-width: 925px) {
    width: unset;
    height: ${props => props.collapse ? '120px' : '50%'};
    padding: 30px;
  }
`
const Greeting = styled.h1`
  position: absolute;
  margin: 0;
  font-size: 4rem;
  font-weight: 600;
  letter-spacing: 1rem;
  line-height: 5rem;
  color: white;
  white-space: nowrap;
  opacity: ${props => props.collapse ? 0 : 1};
  transition: opacity ease 500ms;
  pointer-events: none;

  @media only screen and (max-width: 925px) {
    font-size: 3rem;
    letter-spacing: 0.6rem;
    line-height: 4rem;
  }
`
const Title1 = styled.h1`
  position: absolute;
  margin: 0;
  top: ${props => props.collapse ? 'calc(50% - 3rem)' : 'calc(50px + 10rem)'};
  left: ${props => props.collapse ? 'calc((250px - 5rem) / 2)' : '50px'};
  font-size: ${props => props.collapse ? '2rem' : '4rem'};
  font-weight: ${props => props.collapse ? '400' : '600'};
  letter-spacing: 1rem;
  line-height: ${props => props.collapse ? '3rem' : '5rem'};
  color: white;
  white-space: nowrap;
  transition: all ease 500ms;
  pointer-events: none;

  @media only screen and (max-width: 925px) {
    top: ${props => props.collapse ? 'calc(50% - 2rem)' : 'calc(30px + 8rem)'};
    left: ${props => props.collapse ? 'calc((100% - 3.6rem) / 2)' : '30px'};
    font-size: ${props => props.collapse ? '1.5rem' : '3rem'};
    letter-spacing: 0.6rem;
    line-height: ${props => props.collapse ? '2rem' : '4rem'};
  }
`
const Title2 = styled.h1`
  position: absolute;
  margin: 0;
  top: 50%;
  left: calc((250px - 5rem) / 2);
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 1rem;
  line-height: 3rem;
  color: white;
  white-space: nowrap;
  opacity: ${props => props.collapse ? 1 : 0};
  transition: opacity ease 500ms;
  pointer-events: none;

  @media only screen and (max-width: 925px) {
    left: calc((100% - 3.6rem) / 2);
    font-size: 1.5rem;
    letter-spacing: 0.6rem;
    line-height: 2rem;
  }
`
const MenuLayout = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
  opacity: ${props => props.collapse ? 1 : 0};
  transition: opacity ease 500ms;
`

// 오버레이
const pencilAnimation = keyframes`
    0% {
        top: 100%;
        transform: translate(-50%, -50%) rotate(0deg);
    }
    50% {
        top: 50%;
        transform: translate(-50%, -50%) rotate(0deg);
    }
    60% {
        top: 50%;
        transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
        top: 50%;
        transform: translate(-50%, -50%) rotate(30deg);
    }
`
const pencilAnimationMobile = keyframes`
    0% {
        left: 0%;
        transform: translate(-50%, -50%) rotate(90deg);
    }
    50% {
        left: 50%;
        transform: translate(-50%, -50%) rotate(90deg);
    }
    60% {
        left: 50%;
        transform: translate(-50%, -50%) rotate(90deg);
    }
    100% {
        left: 50%;
        transform: translate(-50%, -50%) rotate(60deg);
    }
`
const Pencil = styled.img`
    position: fixed;
    left: ${props => props.collapse ? '250px' : '50%'};
    height: 450px;
    aspect-ratio: 1/20;
    filter: drop-shadow(0 0 20px black);
    opacity: ${props => props.collapse ? 0 : 1};
    transition: opacity 500ms, left ease 500ms, top ease 500ms;
    animation: ${pencilAnimation} 1300ms 0s 1 ease forwards;

    @media only screen and (max-width: 925px) {
      left: unset;
      top: ${props => props.collapse ? '120px' : '50%'};
      height: 350px;
      animation: ${pencilAnimationMobile} 1300ms 0s 1 ease forwards;
    }
`