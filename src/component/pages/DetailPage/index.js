import React, { useEffect, useState } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { useParams } from "react-router";

import { 
    BaseLayout,
    BackgroundLayout, GuideLabel, Decoration,
    HeaderLayout, Title, Description, TagLayout, Tag,
    ContentLayout, Post, FooterLayout,
    MenuLayout
} from "./style";
import FloatingButton from "../../common/FloatingButton";
import { IoChevronBackOutline, IoHomeOutline, IoShareSocialOutline, IoChatboxOutline, IoArrowUpOutline } from "react-icons/io5";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./render.css";

function DetailPage(props)
{
    // Initialize content
    const { contentId } = useParams();
    const contentType = props.type;
    const contentList = require(`../../../data/${contentType}/list.json`);
    const [contentInfo, setContentInfo] = useState();
    const [contentText, setContentText] = useState('');

    // Initialize scroll state
    const [headerScrollDegree, setHeaderScrollDegree] = useState(0);
    const updateHeaderScrollDegree = () => {
        const scrollDegree = window.scrollY * 2 / window.innerHeight;
        setHeaderScrollDegree(scrollDegree > 1 ? 1 : scrollDegree);
    };

    // Initialize page
    useEffect(() => {
        // Handle scroll event
        window.addEventListener('scroll', updateHeaderScrollDegree);

        // Get content info
        setContentInfo(contentList.find(content => content.id === contentId));

        // Get content text
        try 
        {
            const md = require(`../../../data/${contentType}/${contentId}/content.md`).default;
            fetch(md).then(res => res.text()).then(content => setContentText(content));
        }
        catch(e) { setContentText('e'); }

        return () => window.removeEventListener('scroll', updateHeaderScrollDegree);
    }, [contentId, contentType, contentList]);

    // MD rendering option
    const renderOption = {
        h1: ({children, ...props}) => (
            <div>
                <br/>
                <hr className="divider"/>
                <h1 className="subtitle" {...props}>{children}</h1>
                <hr className="divider"/>
            </div>
        ),
        p: ({children, ...props}) => <p className="paragraph" {...props}>{children}</p>,
        strong: ({children, ...props}) => <strong className="strong" {...props}>{children}</strong>,
        extra: ({children, ...props}) => <span className="extra" {...props}>{children}</span>,
        blockquote: ({children, ...props}) => <blockquote className="quote" {...props}>{children}</blockquote>,
        ol: ({children, ordered, ...props}) => <ol className="ordered-list" ordered={ordered.toString()} {...props}>{children}</ol>,
        a: ({children, ...props}) => <a className="link" {...props}>{children}</a>,
        hr: ({...props}) => <hr className="divider" {...props}/>,
        img: ({src, src2, width, width2, alt, ...props}) => (
            <div className="image-container">
                <div className="image-list">
                    <img className="image" src={require(`../../../data/${contentType}/${contentId}/${src}`).default} width={width} alt={alt} {...props}/>
                    {src2 && <img className="image" src={require(`../../../data/${contentType}/${contentId}/${src2}`).default} width={width2} alt={alt} {...props}/>}
                </div>
                <span className="image-description">{alt}</span>
            </div>),
        code: ({node, inline, className, children, ...props}) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match 
                ? <SyntaxHighlighter style={materialDark} language={match[1]} children={String(children).replace(/\n$/, '')} {...props}/>
                : <code className={className} {...props}/>;
        }
    }

    // Click event
    const goBack = () => props.history.goBack();
    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth'});

    return (
        contentText !== 'e' ? (
        <BaseLayout>
            {/* 배경 */}
            <BackgroundLayout opacity={1 - headerScrollDegree}>
                <GuideLabel>⌵</GuideLabel>
                <Decoration top="-10rem" left="10rem">나</Decoration>
                <Decoration bottom="-8rem" right="10rem">무</Decoration>
            </BackgroundLayout>
            {/* 헤더 */}
            <HeaderLayout opacity={1 - headerScrollDegree}>
                <Title>{contentInfo?.title}</Title>
                <Description>{contentInfo?.date}</Description>
                <TagLayout>
                    <Tag>{contentInfo?.category}</Tag>
                    {">"}
                    {contentInfo?.tag.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
                </TagLayout>
            </HeaderLayout>
            {/* 내용 */}
            <ContentLayout>
                <Post>
                    <ReactMarkdown
                        remarkPlugins={[gfm]}
                        rehypePlugins={[rehypeRaw]}
                        components={renderOption}
                        children={contentText}/>
                </Post>
                <FooterLayout/>
            </ContentLayout>
            {/* 플로팅 메뉴 */}
            <MenuLayout top="0" left="0">
                <FloatingButton onClick={goBack}><IoChevronBackOutline fontSize="1.4rem"/></FloatingButton>
                <FloatingButton route="/"><IoHomeOutline fontSize="1.4rem"/></FloatingButton>
            </MenuLayout>
            <MenuLayout opacity={headerScrollDegree} bottom="0" right="0">
                <FloatingButton><IoShareSocialOutline fontSize="1.4rem"/></FloatingButton>
                <FloatingButton><IoChatboxOutline fontSize="1.4rem"/></FloatingButton>
                <FloatingButton onClick={scrollTop}><IoArrowUpOutline fontSize="1.4rem"/></FloatingButton>
            </MenuLayout>
        </BaseLayout>) : <Redirect to="/error"/>
    );
}

export default withRouter(DetailPage);