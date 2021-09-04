import {
    BaseContainer, 
    HeaderContainer, HeaderBackground, NavigationContainer, Icon, Navigation
} from "./App.style";
import namooIcon from "./image/namoo.png";

export const Container = {
    Base: function(props) {
        return <BaseContainer>{props.children}</BaseContainer>
    },
};

export const Group = {
    Header: function(props) {
        const collapse = () => props.setCollapsed(true);
        return (
            <HeaderContainer>
                <HeaderBackground collapsed={props.collapsed}/>
                <NavigationContainer collapsed={props.collapsed}>
                    <Icon src={namooIcon} onClick={() => props.setCollapsed(!props.collapsed)}/>
                    <Navigation to="/blog" selected={props.currentPath === '/blog'} onClick={collapse}>블로그</Navigation>
                    <Navigation to="/project" selected={props.currentPath === '/project'} onClick={collapse}>프로젝트</Navigation>
                    <Navigation to="/" selected={props.currentPath === '/'} onClick={collapse}>소개</Navigation>
                </NavigationContainer>
            </HeaderContainer>
        );
    },
};

export const Element = {
    
};