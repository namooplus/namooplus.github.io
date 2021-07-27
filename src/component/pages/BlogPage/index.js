import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import PostList from "../../../post/blog/list.json";

import {
    BaseLayout, 
    CategoryLayout, Category, ContentLayout
} from "./style";
import PostCard from "../../common/PostCard";

function BlogPage(props)
{
    // Category
    const category = queryString.parse(props.location.search).category;
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        // Header sizing
        props.setHeaderCollapsed(true);

        // Filter posts by category
        const filteredList = category 
            ? PostList.filter(post => post.category === category) 
            : PostList.filter(post => post.recommend === true);
        setFilteredPosts(filteredList);
    }, [category, props]);

    // Click event
    const pushLink = (route) => props.history.push(route);
    const replaceLink = (route) => props.history.replace(route);

    return (
        <BaseLayout>
            <CategoryLayout>
                <Category onClick={() => replaceLink("/blog")} selected={category === undefined}>추천</Category>
                <Category onClick={() => replaceLink("/blog?category=정보")} selected={category === '정보'}>정보</Category>
                <Category onClick={() => replaceLink("/blog?category=코딩")} selected={category === '코딩'}>코딩</Category>
                <Category onClick={() => replaceLink("/blog?category=나무")} selected={category === '나무'}>나무</Category>
            </CategoryLayout>
            <ContentLayout>
                {filteredPosts.map((post, index) => 
                <PostCard 
                    key={index}
                    title={post.title}
                    thumbnail={require(`../../../post/blog/${post.id}/thumbnail.png`).default}
                    date={post.date}
                    tag={post.tag}
                    onClick={() => pushLink(`/post/${post.id}`)}/>)}
            </ContentLayout>
        </BaseLayout>
    );
}

export default withRouter(BlogPage);