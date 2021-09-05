import React, { useEffect, createRef } from "react";

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
    }, []);

    return <div ref={ref}/>
}

export default Comments;