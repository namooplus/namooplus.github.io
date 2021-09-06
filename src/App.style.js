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
    display: flex;
    width: 100%;
    height: 100%;
    flex-flow: column nowrap;
    justify-content: flex-end;
    align-items: center;
    padding: 30px;
    box-sizing: border-box;
    background-color: #EEEEEEAA;
    backdrop-filter: blur(7px);
    opacity: ${props => props.collapsed ? 0 : 1};
    pointer-events: ${props => props.collapsed ? "none" : "auto"};
    transition: .5s opacity;
`

export const NavigationContainer = styled.div`
    position: absolute;
    display: flex;
    height: ${props => props.collapsed ? "60px" : "calc(210px + 4.5rem)"};
    flex-flow: column nowrap;
    align-items: center;
    margin-top: ${props => props.collapsed ? "15px" : "60px"};
    gap: 50px;
    pointer-events: auto;
    overflow: hidden;
    transition: .5s ease all;
`
export const Icon = styled.img`
    width: 60px;
    height: 60px;
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
    transition: .3s opacity;

    &:hover {
        opacity: 1;
    }
`

export const Copyright = styled.span`
    position: fixed;
    bottom: 30px;
    font-size: 0.8rem;
    color: gray;
    opacity: ${props => props.collapsed ? 0 : 1};
    pointer-events: ${props => props.collapsed ? "none" : "auto"};
    transition: .5s opacity;
`