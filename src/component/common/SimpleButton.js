import styled from "styled-components";

function SimpleButton(props)
{
    return <Button onClick={props.onClick}>{props.children}</Button>;
}

export default SimpleButton;

const Button = styled.button`
    border: none;
    padding: 10px 15px;
    background-color: black;
    color: white;
    font-size: 1rem;
    transition: opacity 200ms;

    &:hover {
        opacity: 0.8;
    }
    &:active {
        opacity: 0.6;
    }
`