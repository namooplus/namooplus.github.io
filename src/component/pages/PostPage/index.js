import React from "react";
import { withRouter } from "react-router-dom";
import { useParams } from "react-router";
import { usePost, useScrollTop } from "../../../util/hooks";

import { Container, Group } from "./component";

function PostPage(props)
{
    // 포스트 초기화
    const { postId } = useParams();
    const postType = postId.match(/^\d/) ? 'blog' : 'project';
    const postList = require(`../../../post/${postType}/list.json`);
    const { postInfo, postContent } = usePost(postId, postType, postList);

    // 스크롤 이벤트
    const isScrollTop = useScrollTop();

    // 클릭 이벤트
    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth'});

    return (
        <Container.Base postContent={postContent}>
            <Group.SubHeader postInfo={postInfo} collapse={!isScrollTop}/>
            <Group.Post id={postId} type={postType} content={postContent}/>
            <Group.Comment/>
            <Group.Menu scrollTop={scrollTop}/>
        </Container.Base>
    );
}

export default withRouter(PostPage);