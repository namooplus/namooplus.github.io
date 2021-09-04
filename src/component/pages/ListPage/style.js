import styled from "styled-components";

export const BaseContainer = styled.div`
    display: flex;
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
    box-sizing: border-box;
`

export const SubHeaderContainer = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
    padding: 110px 0 30px 0;
    gap: 10px;
    z-index: 30;
    background-color: #EEEEEEAA;
    backdrop-filter: blur(10px);
`
export const CategoryContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
export const Category = styled.button`
    padding: 0;
    border: none;
    background: none;
    font-size: 1.5rem;
    font-weight: 700;
    color: black;
    opacity: ${props => props.selected ? 1 : 0.2};
    transition: opacity .3s;

    &:hover {
        opacity: 1;
    }
`
export const TagContainer = styled.div`
    display: ${props => props.hide ? "none" : "flex"};
    max-width: 1000px;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    overflow-x: scroll;
    border-radius: 30px;
    background-color: #21D1C2;
`
export const Tag = styled.button`
    padding: 5px 10px;
    border: none;
    background: none;
    font-size: 0.9rem;
    color: white;
    opacity: ${props => props.selected ? 1 : 0.4};
    transition: opacity .3s;

    &:hover {
        opacity: 1;
    }
`

export const PostContainer = styled.div`
    display: flex;
    max-width: 1000px;
    flex: 1 0 0;
    flex-flow: row wrap;
    justify-content: center;
    align-content: flex-start;
    padding: 0 30px 60px 30px;
    box-sizing: border-box;
    gap: 15px;

    @media only screen and (max-width: 925px) {
        width: 100%;
    }
`