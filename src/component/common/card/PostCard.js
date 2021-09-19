import styled from "styled-components";

function PostCard(props)
{
    return (
        <CardLayout onClick={props.onClick}>
            <TagLayout>{props.tag.map((tag, index) => <Tag key={index}>#{tag}</Tag>)}</TagLayout>
            <Title>{props.title}</Title>
            <Date>{props.date}</Date>
        </CardLayout>
    );
}

export default PostCard;

const CardLayout = styled.div`
    display: flex;
    width: 300px;
    height: 250px;
    flex-flow: column nowrap;
    padding: 20px;
    gap: 7px;
    box-sizing: border-box;
    background: linear-gradient(225deg, #21D1C2 0%, #21D1C2 30px, white 30px, white 100%);
    box-shadow: 0 10px 10px #DDDDDD;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        box-shadow: 0 30px 30px #BBBBBB;
    }
    &:active {
        opacity: 0.5;
    }

    @media only screen and (max-width: 675px) {
        width: 100%;
        height: unset;
        padding: 15px;
        box-shadow: 0 5px 5px #DDDDDD50;

        &:hover {
            box-shadow: 0 10px 10px #BBBBBB50;
        }
    }
`

const TagLayout = styled.div`
    flex: 1 1 0;
    display: flex;
    flex-flow: column nowrap;
    gap: 2px;

    @media only screen and (max-width: 675px) {
        flex-flow: row nowrap;
        gap: 5px;
    }
`
const Tag = styled.span`
    font-size: 1.5rem;
    font-weight: 600;
    color: #21D1C2;

    @media only screen and (max-width: 675px) {
        font-size: 0.7rem;
    }
`
const Title = styled.h3`
    margin: 0;
    color: black;
    font-size: 1.3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media only screen and (max-width: 675px) {
        font-size: 1.1rem;
    }
`
const Date = styled.span`
    margin: 0;
    font-size: 0.7rem;
    color: gray;
`