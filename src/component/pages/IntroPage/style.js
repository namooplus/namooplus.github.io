import styled from "styled-components";

export const BaseContainer = styled.div`
    display: flex;
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
    padding: 150px 30px 60px 30px;
    box-sizing: border-box;
    gap: 80px;
`

export const Boundary = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 90px;
    z-index: 30;
    background-color: #EEEEEEAA;
    backdrop-filter: blur(10px);
`

export const Title = styled.h1`
    margin: 50px 0;
    text-align: center;
    font-size: 3rem;
    font-weight: 600;
    color: black;
    background: linear-gradient(to bottom, #21D167 0%, #21D1C2 100%);
    background-clip: unset;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
export const Pencil = styled.img`
    width: 20px;
    height: 400px;
`

export const SectionContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 15px;
`
export const Subtitle = styled.h2`
    margin: 0;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    color: black;
`
export const Description = styled.p`
    margin: 0;
    font-size: 1rem;
    color: black;
    text-align: center;
`
export const ButtonContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 15px;
`
