import { useEffect, useState } from "react";

// 카테고리 목록
export function useCategoryList(postList) {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        const tempCategoryList = [];
        postList.forEach(post => {
            if (!tempCategoryList.includes(post.category)) 
                tempCategoryList.push(post.category);
        });
        setCategoryList(tempCategoryList);
    }, [postList]);

    return categoryList;
}

// 포스트 목록
export function useFilteredPostList(postList, category) {
    const [filteredPostList, setFilteredPostList] = useState([]);

    useEffect(() => setFilteredPostList(postList.filter(post => post.category === category)), [postList, category]);

    return filteredPostList;
}

// 태그 목록
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

// 포스트 정보
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

// 스크롤
export function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState('NONE');

    let throttler;
    let prevScrollRemain = document.body.scrollHeight - window.scrollY;
    const SCROLL_BUFFER = 100;

    const handleScroll = () => {
        if (throttler) return;
        throttler = setTimeout(() => {
            let scrollRemain = document.body.scrollHeight - window.scrollY;

            if (prevScrollRemain + SCROLL_BUFFER < scrollRemain || window.scrollY === 0) setScrollDirection('UP');
            else if (prevScrollRemain > scrollRemain) setScrollDirection('DOWN');
            else setScrollDirection('NONE');

            prevScrollRemain = scrollRemain;
            throttler = null;
        }, 100);
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scrollDirection;
}
export function useScrollTop() {
    const [isScrollTop, setScrollTop] = useState(true);

    let throttler;

    const handleScroll = () => {
        if (throttler) return;
        throttler = setTimeout(() => {
            if (window.scrollY === 0) setScrollTop(true);
            else setScrollTop(false);
            throttler = null;
        }, 100);
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return isScrollTop;
}