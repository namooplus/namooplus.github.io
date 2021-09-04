import { useEffect, useState } from "react";

// ListPage
export function useCategoryList(postList) {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        const tempCategoryList = ['추천'];
        postList.forEach(post => {
            if (!tempCategoryList.includes(post.category)) 
                tempCategoryList.push(post.category);
        });
        setCategoryList(tempCategoryList);
    }, [postList]);

    return categoryList;
}
export function useFilteredPostList(postList, category) {
    const [filteredPostList, setFilteredPostList] = useState([]);

    useEffect(() => {
        if (category === '추천') setFilteredPostList(postList.filter(post => post.recommend === true));
        else setFilteredPostList(postList.filter(post => post.category === category));
    }, [postList, category]);

    return filteredPostList;
}
export function useTagList(filteredPostList) {
    const [tagList, setTagList] = useState([]);

    useEffect(() => {
        const tempTagList = ['모두'];
        filteredPostList.forEach(post => {
            post.tag.forEach(tag => {
                if (!tempTagList.includes(tag)) 
                    tempTagList.push(tag);
            })
        });
        setTagList(tempTagList);
    }, [filteredPostList]);

    return tagList;
}

// PostPage
export function usePost(postId, postType, postList) {
    const [postInfo, setPostInfo] = useState();
    const [postContent, setPostContent] = useState('');

    useEffect(() => setPostInfo(postList.find(post => post.id === postId)), [postId, postList]);
    useEffect(() => {
        try {
            const md = require(`../post/${postType}/${postId}/content.md`).default;
            fetch(md).then(res => res.text()).then(content => setPostContent(content));
        }
        catch(e) { 
            setPostContent('e'); 
        }
    }, [postId, postType]);

    return { postInfo, postContent };
}
export function useScrollDown() {
    const [scrollDown, setScrollDown] = useState(0);
    let isRecordAllowed = true;
    let prevScrollY = window.scrollY;

    const allowRecord = () => {
        prevScrollY = window.scrollY;
        isRecordAllowed = true;
    };
    const handleScroll = () => {
        if (!isRecordAllowed) return;
        isRecordAllowed = false;
        setTimeout(allowRecord, 600);
        setScrollDown(prevScrollY < window.scrollY);
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scrollDown;
}