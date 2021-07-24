import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function PostCard(props)
{
    return (
        <Link style={{textDecoration: "none"}} to={props.link}>
            <CardLayout>
                <Thumbnail src={props.thumbnail}/>
                <DescriptionLayout>
                    <Title>{props.title}</Title>
                    <Date>{props.date}</Date>
                    <TagLayout>{props.tag.map((tag, index) => <Tag key={index}>{tag}</Tag>)}</TagLayout>
                </DescriptionLayout>
            </CardLayout>
        </Link>
    );
}

export default PostCard;

const CardLayout = styled.div`
    display: flex;
    height: 150px;
    flex-flow: row nowrap;
    background-color: white;
    box-shadow: 0 0 10px lightgray;
    transition: background-color 500ms;

    &:hover {
        background-color: #eeeeee;
    }
    &:active {
        background-color: #dddddd;
    }

    @media only screen and (max-width: 600px) {
        flex-flow: column nowrap;
        height: unset;
    }
`
const Thumbnail = styled.img`
    width: 150px;
    aspect-ratio: 1/1;

    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`
const DescriptionLayout = styled.div`
    display: flex;
    flex: 1 0 0;
    flex-flow: column nowrap;
    padding: 20px;
    gap: 7px;
    overflow-x: hidden;

    @media only screen and (max-width: 600px) {
        flex: unset;
    }
`
const Title = styled.h3`
    margin: 0;
    color: black;
    font-size: 1.3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
const Date = styled.span`
    margin: 0;
    color: gray;
    font-size: 1rem;
`
const TagLayout = styled.div`
    display: flex;
    flex: 1 0 0;
    flex-flow: row nowrap;
    align-items: flex-end;
    gap: 7px;

    @media only screen and (max-width: 600px) {
        flex: unset;
        margin-top: 15px;
    }
`
const Tag = styled.span`
    padding: 5px 7px;
    background: rgb(27, 218, 193);
    color: black;
    font-size: 0.7rem;
`