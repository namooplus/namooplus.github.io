import styled from "styled-components";

export const BaseContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding : 130px 30px 30px 30px;
    gap: 20px;
`

export const MessageContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 5px;
`
export const Warning = styled.p`
    margin: 0;
    font-size: 1.2rem;
    font-weight: 600;
`
export const Description = styled.p`
    margin: 0;
    font-size: 0.9rem;
`