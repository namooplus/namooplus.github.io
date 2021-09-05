import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useCategoryList, useFilteredPostList, useTagList } from "../../../util/hooks";

import { Container, Group } from "./component";

function ListPage(props)
{
    const postList = require(`../../../post/${props.type}/list.json`);

    const categoryList = useCategoryList(postList);
    const [category, setCategory] = useState();
    const filteredPostList = useFilteredPostList(postList, category);
    const tagList = useTagList(filteredPostList);
    const [tag, setTag] = useState();

    useEffect(() => setCategory(categoryList[0]), [categoryList]);
    useEffect(() => setTag(tagList[0]), [tagList]);
    useEffect(() => window.scrollTo({ top: 0, behavior: 'smooth'}), [category, tag]);

    // 클릭 이벤트
    const link = (route) => props.history.push(route);

    return (
        <Container.Base>
            <Container.SubHeader>
                <Group.Category categoryList={categoryList} category={category} setCategory={setCategory}/>
                <Group.Tag tagList={tagList} tag={tag} setTag={setTag} category={category}/>
            </Container.SubHeader>
            <Group.Post type={props.type} filteredPostList={filteredPostList} tag={tag} link={link}/>
        </Container.Base>
    );
}

export default withRouter(ListPage);