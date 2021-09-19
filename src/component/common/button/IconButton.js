import styled from "styled-components";

function IconButton(props)
{
    return (
        <Button size={props.size} color={props.color} onClick={props.onClick}>
            {props.icon && <props.icon fontSize={props.size || "1.5rem"}/>}
        </Button>
    );
}

export default IconButton;

const Button = styled.button`
    width: ${props => props.size || "1.5rem"};
    height: ${props => props.size || "1.5rem"};
    padding: 0;
    border: none;
    background-color: transparent;
    color: ${props => props.color || "black"};
    cursor: pointer;
    transition: opacity 200ms;

    &:hover {
        opacity: 0.6;
    }
    &:active {
        opacity: 0.4;
    }
`