import styled from "styled-components";

export const BaseLayout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    overflow-x: hidden;
    overflow-y: scroll;
`

export const CategoryLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    gap: 20px;

    @media only screen and (max-width: 925px) {
        margin-top: 30px;
    }
`
export const Category = styled.button`
    padding: 0;
    border: none;
    background: none;
    font-size: 1.5rem;
    font-weight: 700;
    color: black;
    opacity: ${props => props.selected ? 1 : 0.2};
    transition: opacity 500ms;

    &:hover {
        opacity: 1;
    }

    @media only screen and (max-width: 925px) {
        font-size: 1.4rem;
    }
`
export const ContentLayout = styled.div`
    display: flex;
    width: calc(100vw - 250px);
    flex: 1 0 0;
    flex-flow: row wrap;
    justify-content: center;
    align-content: flex-start;
    padding: 30px 30px 50px 30px;
    box-sizing: border-box;
    gap: 15px;

    @media only screen and (max-width: 925px) {
        width: 100%;
        padding: 30px;
    }
`