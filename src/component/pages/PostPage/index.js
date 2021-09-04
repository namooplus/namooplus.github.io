import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useParams } from "react-router";
import { usePost, useScrollDown } from "../../../util/hooks";

import { Container, Group } from "./component";

function PostPage(props)
{
    // 포스트 초기화
    const { postId } = useParams();
    const postType = postId.match(/^\d/) ? 'blog' : 'project';
    const postList = require(`../../../post/${postType}/list.json`);
    const { postInfo, postContent } = usePost(postId, postType, postList);

    const [isCommentOpen, setCommentOpen] = useState(false);
    const scrollDown = useScrollDown();

    // 클릭 이벤트
    const toggleComment = () => setCommentOpen(!isCommentOpen);
    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth'});

    return (
        <Container.Base postContent={postContent}>
            <Group.SubHeader postInfo={postInfo} collapse={scrollDown}/>
            <Group.Post id={postId} type={postType} content={postContent}/>
            <Group.Menu toggleComment={toggleComment} scrollTop={scrollTop}/>
            <Group.Comment open={isCommentOpen}/>
        </Container.Base>
    );
}

export default withRouter(PostPage);