import styled from "styled-components";

export const BaseContainer = styled.div`
    display: flex;
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
    padding: 130px 30px 60px 30px;
    box-sizing: border-box;
    gap: 80px;
`

export const SectionContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 30px;
`
export const Title = styled.h1`
    margin: 0;
    text-align: center;
    font-size: 3rem;
    font-weight: 600;
    color: black;
`
export const Introduction = styled.p`
    margin: 0;
    font-size: 1.2rem;
    color: black;
`
export const ButtonContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 15px;
`
