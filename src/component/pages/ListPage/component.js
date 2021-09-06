import {
    BaseContainer, 
    SubHeaderContainer, CategoryContainer, Category, TagContainer, Tag,
    PostContainer
} from "./style";
import PostCard from "../../common/card/PostCard";

export const Container = {
    Base: function(props) {
        return <BaseContainer>{props.children}</BaseContainer>
    },
    SubHeader: function(props) {
        return <SubHeaderContainer>{props.children}</SubHeaderContainer>
    },
};

export const Group = {
    Category: function(props) {
        return (
            <CategoryContainer>{props.categoryList.map((category, index) => 
                <Category key={index} onClick={() => props.setCategory(category)} selected={props.category === category}>{category}</Category>)}
            </CategoryContainer>
        )
    },
    Tag: function(props) {
        return (
            <TagContainer>{props.tagList.map((tag, index) => 
                <Tag key={index} onClick={() => props.setTag(tag)} selected={props.tag === tag}>{tag}</Tag>)}
            </TagContainer>
        )
    },
    Post: function(props) {
        return (
            <PostContainer>
                {props.filteredPostList.filter(post => {
                    if (props.tag === '모두') return true;
                    return post.tag.includes(props.tag);
                }).map((post, index) => 
                <PostCard 
                    key={index}
                    title={post.title}
                    thumbnail={require(`../../../post/${props.type}/${post.id}/thumbnail.png`).default}
                    date={post.date}
                    tag={post.tag}
                    onClick={() => props.link(`/post/${post.id}`)}/>)}
            </PostContainer>
        )
    },
};

export const Element = {

};