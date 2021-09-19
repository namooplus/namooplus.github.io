import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import {
    BaseContainer, 
    HeaderContainer, HeaderBackground, Copyright, NavigationContainer, Icon, Navigation
} from "./App.style";
import namooIcon from "./image/namoo.png";

export const Container = {
    Base: function(props) {
        return <BaseContainer>{props.children}</BaseContainer>
    },
};

export const Group = {
    Header: function(props) {
        const currentLocation = useLocation();

        const [isCollapsed, setCollapsed] = useState(true);
        const collapse = () => setCollapsed(true);

        return (
            <HeaderContainer>
                <HeaderBackground collapsed={isCollapsed}/>
                <NavigationContainer collapsed={isCollapsed}>
                    <Icon src={namooIcon} onClick={() => setCollapsed(!isCollapsed)}/>
                    <Navigation to="/blog" selected={currentLocation.pathname === '/blog'} onClick={collapse}>블로그</Navigation>
                    <Navigation to="/project" selected={currentLocation.pathname === '/project'} onClick={collapse}>프로젝트</Navigation>
                    <Navigation to="/" selected={currentLocation.pathname === '/'} onClick={collapse}>소개</Navigation>
                    <Copyright collapsed={isCollapsed}>Copyright 2020-2021 나무 All rights reserved</Copyright>
                </NavigationContainer>
            </HeaderContainer>
        );
    },
};

export const Element = {
    
};