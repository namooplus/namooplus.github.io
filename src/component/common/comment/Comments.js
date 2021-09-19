import React, { useEffect, createRef } from "react";

import styled from "styled-components";

function Comments(props) {
    const ref = createRef();

    useEffect(() => {
        const utterances = document.createElement('script');
        utterances.setAttribute('src', 'https://utteranc.es/client.js');
        utterances.setAttribute('repo', 'namooplus/namoo-note-comment');
        utterances.setAttribute('issue-term', 'pathname');
        utterances.setAttribute('theme', 'github-light');
        utterances.setAttribute('crossorigin', 'anonymous');
        utterances.setAttribute('async', true);

        ref.current.appendChild(utterances);
        // eslint-disable-next-line
    }, []);

    return <CommentWrapper ref={ref}/>
}

export default Comments;

export const CommentWrapper = styled.div`
    width: 768px;
    padding: 30px;
    box-sizing: border-box;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`