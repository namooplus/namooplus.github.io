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
                현재 컴퓨터과학과에 재학중이며 코딩에 흥미를 가지고 열심히 공부하고 있습니다 :)<br/>
                안드로이드 앱 개발과 더불어 React를 이용한 웹 개발을 도전하고 있습니다.<br/>
                특히 UI/UX에 관심이 많으며 심심할 때 그림도 그립니다!<br/>
                '프로젝트'를 눌러 지금까지 직접 참여한 프로젝트들을 확인할 수 있습니다.<br/>
                정리 및 공유를 위한 블로그도 운영하고 있으니 한 번씩 구경해주세요~
            </Introduction>
            <LinkLayout>
                <SimpleButton onClick={() => pushLink("/blog")}>블로그</SimpleButton>
                <SimpleButton onClick={() => pushLink("/project?category=앱")}>프로젝트</SimpleButton>
            </LinkLayout>
        </BaseLayout>
    );
}

export default withRouter(IntroPage);