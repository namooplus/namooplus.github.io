import styled from "styled-components";

function SimpleButton(props)
{
    return <Button onClick={props.onClick}>{props.children}</Button>;
}

export default SimpleButton;

const Button = styled.button`
    padding: 10px 15px;
    border: none;
    background-color: black;
    box-shadow: 0 10px 10px #DDDDDD;
    color: white;
    font-size: 1rem;
    transition: box-shadow .3s, opacity .3s;

    &:hover {
        box-shadow: 0 20px 20px #BBBBBB;
    }
    &:active {
        opacity: 0.5;
    }
`