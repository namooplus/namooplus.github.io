import styled from "styled-components";

export const BaseLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
`

// 배경
export const BackgroundLayout = styled.div.attrs(props => ({
    style: {
        opacity: props.opacity
    }
}))`
    position: fixed;
    display: flex;
    height: 100vh;
    width: 100vw;
    flex-flow: column nowrap;
    pointer-events: none;
`
export const GuideLabel = styled.span`
    position: absolute;
    width: 100%;
    bottom: 0;
    margin-bottom: 30px;
    font-size: 2.5rem;
    text-align: center;
    color: black;
`
export const Decoration = styled.span`
    position: absolute;
    top: ${props => props.top || 'unset'};
    bottom: ${props => props.bottom || 'unset'};
    left: ${props => props.left || 'unset'};
    right: ${props => props.right || 'unset'};
    color: gray;
    font-size: 20rem;
    font-weight: 800;
    opacity: 0.2;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`

// 헤더
export const HeaderLayout = styled.div.attrs(props => ({
    style: {
        opacity: props.opacity
    }
}))`
    position: fixed;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    padding: 50px;
    box-sizing: border-box;
    gap: 5px;
    pointer-events: none;
`
export const Title = styled.h1`
    margin: 0;
    color: black;
    font-size: 2.5rem;
    text-align: center;
`
export const Description = styled.h2`
    margin: 0;
    color: gray;
    font-size: 1.3rem;
    font-weight: 300;
`
export const TagLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 7px;
    margin-top: 15px;
`
export const Tag = styled.span`
    padding: 5px 7px;
    background: rgb(27, 218, 193);
    color: black;
    font-size: 0.7rem;
`

// 포스트
export const ContentLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    min-height: 100vh;
    align-items: center;
    margin-top: 100vh;
    background-color: white;
    box-shadow: 0 0 20px lightgray;
`
export const Post = styled.div`
    flex: 1 0 0;
    width: 700px;
    padding: 30px;
    box-sizing: border-box;

    @media only screen and (max-width: 700px) {
        width: 100%;
    }
`
export const FooterLayout = styled.div`
    width: 100%;
    height: 130px;
    background: linear-gradient(to bottom, white 0%, #ebfffb 100%);
`

// 플로팅
export const MenuLayout = styled.div.attrs(props => ({
    style: {
        opacity: props.opacity
    }
}))`
    position: fixed;
    top: ${props => props.top || "unset"};
    bottom: ${props => props.bottom || "unset"};
    right: ${props => props.right || "unset"};
    left: ${props => props.left || "unset"};
    display: flex;
    flex-flow: row nowrap;
    margin: 40px;
    gap: 20px;
`