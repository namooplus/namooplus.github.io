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
    padding: 90px 0 15px 0;
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
    border-bottom: 2px solid ${props => props.selected ? 'black' : 'transparent'};
    background: none;
    font-size: 1.4rem;
    font-weight: 700;
    color: black;
    cursor: pointer;
    opacity: ${props => props.selected ? 1 : 0.2};
    transition: opacity .3s;

    &:hover {
        opacity: 1;
    }
`
export const TagContainer = styled.div`
    display: flex;
    max-width: 1000px;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    gap: 15px;
    overflow-x: scroll;
`
export const Tag = styled.button`
    padding: 0;
    border: none;
    background: none;
    font-size: 0.9rem;
    color: black;
    cursor: pointer;
    opacity: ${props => props.selected ? 1 : 0.2};
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
    padding: 15px 30px 60px 30px;
    box-sizing: border-box;
    gap: 15px;

    @media only screen and (max-width: 925px) {
        width: 100%;
        padding: 15px 15px 30px 15px;
    }
`