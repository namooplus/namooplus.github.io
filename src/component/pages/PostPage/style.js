import styled from "styled-components";
import { DiscussionEmbed } from 'disqus-react';

export const BaseLayout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
`

// 내용
export const ContentLayout = styled.div`
    position: relative;
    flex: 1 0 0;
    display: flex;
    flex-flow: column nowrap;
`
export const PostLayout = styled.div`
    flex: 1 0 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 50px 50px 100px 50px;
    box-sizing: border-box;
    gap: 10px;
    overflow-x: hidden;
    overflow-y: scroll;

    @media only screen and (max-width: 925px) {
        padding: 30px 30px 80px 30px;
    }
`
export const Title = styled.h1`
    margin: 0;
    color: black;
    font-size: 2.5rem;
    text-align: center;

    @media only screen and (max-width: 925px) {
        font-size: 2rem;
    }
`
export const Date = styled.h2`
    margin: 0;
    color: gray;
    font-size: 1.3rem;
    font-weight: 300;

    @media only screen and (max-width: 925px) {
        font-size: 1.1rem;
    }
`
export const TagLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 7px;
    margin-top: 5px;
`
export const Tag = styled.span`
    padding: 5px 7px;
    background: #21D1C2;
    color: white;
    font-size: 0.7rem;
`
export const Divider = styled.hr`
    width: 100%;
    margin-top: 35px;
    border: 1px solid lightgray;
    transform: scaleY(0.5);

    @media only screen and (max-width: 925px) {
        margin-top: 20px;
    }
`
export const Post = styled.div`
    width: 700px;

    @media only screen and (max-width: 1050px) {
        width: 100%;
    }
`
export const MenuLayout = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    flex-flow: row nowrap;
    margin: 50px;
    gap: 20px;

    @media only screen and (max-width: 925px) {
        margin: 30px;
    }
`

// 댓글
export const CommentLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: ${props => props.open ? "300px" : "0"};
    background-color: white;
    box-shadow: 0 0 20px lightgray;
    box-sizing: border-box;
    z-index: 1;
    overflow: scroll;
    transition: height ease 300ms;
`
export const Comment = styled(DiscussionEmbed)`
    margin: 30px 50px;

    @media only screen and (max-width: 925px) {
        margin: 30px;
    }
`