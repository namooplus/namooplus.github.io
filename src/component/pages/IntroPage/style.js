import styled from "styled-components";

export const BaseLayout = styled.div`
    flex: 1 0 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 50px;
    box-sizing: border-box;
    gap: 20px;

    @media only screen and (max-width: 925px) {
        padding: 30px;
    }
`

export const Introduction = styled.p`
    margin: 0;
    font-size: 1rem;
    line-height: 1.6rem;
    text-align: end;
    color: black;

    @media only screen and (max-width: 925px) {
        font-size: 0.9rem;
    }
`
export const LinkLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;
`