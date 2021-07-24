import { Link } from "react-router-dom";
import styled from "styled-components";

function FloatingButton(props)
{
    return (
        props.route 
            ? (<Link to={props.route}><Button>{props.children}</Button></Link>)
            : (<Button onClick={props.onClick}>{props.children}</Button>)
    );
}

export default FloatingButton;

const Button = styled.button`
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0 0 20px lightgray;
    color: black;
    padding: calc(25px - 0.7rem);
    transition: background-color 200ms, box-shadow 200ms;

    &:hover {
        box-shadow: 0 0 40px gray;
    }
    &:active {
        background-color: #EEEEEE;
    }
`