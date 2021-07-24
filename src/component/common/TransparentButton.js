import { Link } from "react-router-dom";
import styled from "styled-components";

function TransparentButton(props)
{
    return (
        props.route 
            ? (<Link to={props.route}><Button>{props.children}</Button></Link>)
            : (<Button onClick={props.onClick}>{props.children}</Button>)
    );
}

export default TransparentButton;

const Button = styled.button`
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    background-color: transparent;
    color: black;
    padding: calc(25px - 0.7rem);
    transition: background-color 200ms;

    &:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }
    &:active {
        background-color: rgba(0, 0, 0, 0.4);
    }
`