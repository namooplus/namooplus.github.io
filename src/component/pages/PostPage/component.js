import { Redirect } from "react-router-dom";
import { useScrollTop } from "../../../util/hooks";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import mdRenderer from "../../../util/mdRenderer";

import {
    BaseContainer,
    SubHeaderContainer, Title, InfoContainer, Date, TagLayout, Tag,
    PostContainer, Loading,
    MenuContainer,
    CommentContainer, CommentTitle
} from "./style";
import Comments from "../../common/comment/Comments";
import FloatingButton from "../../common/button/FloatingButton";
import { IoArrowUpOutline } from "react-icons/io5";

export const Container = {
    Base: function(props) {
        return <BaseContainer>{props.children}</BaseContainer>
    },
};

export const Group = {
    SubHeader: function(props) {
        const isScrollTop = useScrollTop();

        return (
            <SubHeaderContainer>
                <Title collapse={!isScrollTop}>{props.postInfo?.title}</Title>
                <InfoContainer collapse={!isScrollTop}>
                    <Date>{props.postInfo?.date}</Date>
                    <TagLayout>
                        {props.postInfo?.tag.map((tag, index) => <Tag key={index}>#{tag}</Tag>)}
                    </TagLayout>
                </InfoContainer>
            </SubHeaderContainer>
        )
    },
    Post: function(props) {
        if (props.content === '')
            return <Loading>포스트를 불러오고 있어요</Loading>

        else if (props.content === 'e')
            return <Redirect to="/error"/>

        return (
            <PostContainer>
                <ReactMarkdown
                    remarkPlugins={[gfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={mdRenderer(props.id, props.type)}
                    children={props.content}/>
            </PostContainer>
        );
    },
    Comment: function(props) {
        return (
            <CommentContainer>
                <CommentTitle>댓글</CommentTitle>
                <Comments/>
            </CommentContainer>
        )
    },
    Menu: function(props) {
        const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth'});

        return (
            <MenuContainer>
                <FloatingButton icon={IoArrowUpOutline} onClick={scrollTop} />
            </MenuContainer>
        )
    },
};

export const Element = {

};