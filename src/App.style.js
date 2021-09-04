import styled from "styled-components";
import { Link } from "react-router-dom";

export const BaseContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    min-height: 100vh;
`

export const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 100vh;
    flex-flow: column nowrap;
    align-items: center;
    pointer-events: none;
    z-index: 50;
`
export const HeaderBackground = styled.div`
    width: 100%;
    height: 100%;
    background-color: #EEEEEEAA;
    backdrop-filter: blur(7px);
    opacity: ${props => props.collapsed ? 0 : 1};
    pointer-events: ${props => props.collapsed ? "none" : "auto"};
    transition: .5s opacity;
`
export const NavigationContainer = styled.div`
    position: absolute;
    top: ${props => props.collapsed ? "30px" : "calc((100% - (220px + 4.5rem)) / 2)"};
    display: flex;
    height: ${props => props.collapsed ? "70px" : "calc(220px + 4.5rem)"};
    flex-flow: column nowrap;
    align-items: center;
    gap: 50px;
    pointer-events: auto;
    overflow: hidden;
    transition: .5s ease all;
`
export const Icon = styled.img`
    width: 70px;
    height: 70px;
    transition: .3s opacity;

    &:hover {
        opacity: 0.5;
    }
`
export const Navigation = styled(Link)`
    height: 1.5rem;
    pointer-events: ${props => props.selected ? "none" : "auto"};
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 600;
    color: black;
    opacity: ${props => props.selected ? 1 : 0.3};
    transition: .3s opacity;

    &:hover {
        opacity: 1;
    }
`