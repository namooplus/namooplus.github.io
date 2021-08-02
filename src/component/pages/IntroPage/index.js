import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

import { 
    BaseLayout, 
    Introduction, LinkLayout
} from "./style";
import SimpleButton from "../../common/SimpleButton";
import IconButton from "../../common/IconButton";
import { IoLogoGithub, IoLogoInstagram } from "react-icons/io5";

function IntroPage(props)
{
    useEffect(() => {
        // Header sizing
        props.setHeaderCollapsed(false);
    }, [props]);

    // Click event
    const pushLink = (route) => props.history.push(route);
    const openGithub = () => window.open('https://github.com/namooplus');
    const openInstagram = () => window.open('https://www.instagram.com/min.i.stop/'); 

    return (
        <BaseLayout>
            <LinkLayout>
                <IconButton icon={IoLogoGithub} onClick={openGithub}/>
                <IconButton icon={IoLogoInstagram} onClick={openInstagram}/>
            </LinkLayout>
            <Introduction>
                현재 컴퓨터과학과에 재학중이며 코딩에 흥미를 가지고 열심히 공부하고 있습니다.<br/>
                앱/웹/프로그램 개발 경험이 있으며 특히 UI/UX에 관심이 많습니다!<br/>
                최근에는 알고리즘 공부로 고통받고 있습니다 ㅜㅜ<br/>
                '프로젝트'를 눌러 지금까지 참여한 프로젝트들을 확인할 수 있습니다.<br/>
                추가로 블로그도 운영하고 있으니 한 번씩 구경해주세요 :)
            </Introduction>
            <LinkLayout>
                <SimpleButton onClick={() => pushLink("/blog")}>블로그</SimpleButton>
                <SimpleButton onClick={() => pushLink("/project?category=앱")}>프로젝트</SimpleButton>
            </LinkLayout>
        </BaseLayout>
    );
}

export default withRouter(IntroPage);