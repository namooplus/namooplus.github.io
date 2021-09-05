import styled from "styled-components";

export const BaseContainer = styled.div`
    display: flex;
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
`

export const SubHeaderContainer = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
    padding: 90px 30px 20px 30px;
    box-sizing: border-box;
    z-index: 30;
    overflow-y: hidden;
    background-color: #EEEEEEAA;
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #00000010;
`
export const Title = styled.h1`
    margin: 0;
    text-align: center;
    font-size: ${props => props.collapse ? "1rem" : "2rem"};
    color: black;
    transition: font-size ease .3s;
`
export const InfoContainer = styled.div`
    display: flex;
    height: ${props => props.collapse ? "0" : "calc(1.7rem + 25px)"};
    flex-flow: column nowrap;
    align-items: center;
    overflow: hidden;
    transition: height ease .3s;
`
export const Date = styled.h2`
    height: 1rem;
    margin: 3px 0 0 0;
    font-size: 1rem;
    font-weight: 300;
    color: gray;
`
export const TagLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 7px;
    margin-top: 12px;
`
export const Tag = styled.span`
    padding: 5px 7px;
    background: #21D1C2;
    line-height: 0.7rem;
    font-size: 0.7rem;
    color: white;
`

export const PostContainer = styled.div`
    display: flex;
    width: 768px;
    flex-flow: column nowrap;
    padding: 30px 30px 110px 30px;
    box-sizing: border-box;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`

export const MenuContainer = styled.div`
    position: fixed;
    bottom: 30px;
    right: 30px;
    display: flex;
    flex-flow: row nowrap;
    gap: 20px;
    z-index: 40;
`

export const CommentContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 100%;
    flex-flow: column nowrap;
    z-index: 35;
    padding: 90px 30px 110px 30px;
    box-sizing: border-box;
    overflow: scroll;
    background-color: #EEEEEEAA;
    backdrop-filter: blur(7px);
    opacity: ${props => props.open ? 1 : 0};
    pointer-events: ${props => props.open ? "auto" : "none"};
    transition: opacity .3s;
`
export const CommentTitle = styled.h1`
    margin: 0;
    text-align: center;
    font-size: 2rem;
    color: black;
`