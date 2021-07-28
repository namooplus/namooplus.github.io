import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    height: 100vh;

    @media only screen and (max-width: 925px) {
        flex-flow: column nowrap;
    }
`
export const Header = styled.div`
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
export const Greeting = styled.h1`
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
export const Title1 = styled.h1`
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
export const Title2 = styled.h1`
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
export const MenuLayout = styled.div`
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
export const Pencil = styled.img`
    position: fixed;
    left: ${props => props.collapse ? '250px' : '50%'};
    height: 460px;
    width: 23px;
    filter: drop-shadow(0 0 20px black);
    opacity: ${props => props.collapse ? 0 : 1};
    transition: opacity 500ms, left ease 500ms, top ease 500ms;
    animation: ${pencilAnimation} 1300ms 0s 1 ease forwards;
    pointer-events: none;

    @media only screen and (max-width: 925px) {
        left: unset;
        top: ${props => props.collapse ? '120px' : '50%'};
        height: 340px;
        width: 17px;
        animation: ${pencilAnimationMobile} 1300ms 0s 1 ease forwards;
    }
`