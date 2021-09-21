import React from "react";
import { withRouter } from "react-router-dom";
import { useParams } from "react-router";
import { usePost } from "../../../util/hooks";

import Meta from "../../../util/Meta";
import { Container, Group } from "./component";

function PostPage(props)
{
    // 포스트 초기화
    const { postId } = useParams();
    const postType = postId.match(/^\d/) ? 'blog' : 'project';
    const postList = require(`../../../post/${postType}/list.json`);
    const { postInfo, postContent } = usePost(postId, postType, postList);

    return (
        <Container.Base>
            <Meta title={postInfo?.title}/>
            <Group.SubHeader postInfo={postInfo}/>
            <Group.Post id={postId} type={postType} content={postContent}/>
            <Group.Comment/>
            <Group.Menu/>
        </Container.Base>
    );
}

export default withRouter(PostPage);