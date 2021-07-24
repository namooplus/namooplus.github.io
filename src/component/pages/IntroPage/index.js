import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { 
    BaseLayout, FrameLayout, 
    Title, CoverLayout, Pencil,
    PaperLayout, Image, Paragraph, ButtonLayout,
    OverlayLayout, GuideLabel
} from "./style";
import SimpleButton from "../../common/SimpleButton";
import TransparentButton from "../../common/TransparentButton";
import PencilIcon from "../../../image/pencil.PNG";
import namooIcon from "../../../image/namoo.png";
import { IoLogoGithub, IoLogoInstagram } from "react-icons/io5";

function IntroPage(props)
{
    const [scrollDegree, setScrollDegree] = useState(0);
    const isMobile = useMediaQuery({ query: '(max-width: 600px)'});

    const updateScrollDegree = () => setScrollDegree(window.scrollY / (document.body.offsetHeight - window.innerHeight));

    useEffect(() => {
        window.addEventListener('scroll', updateScrollDegree);
        return () => window.removeEventListener('scroll', updateScrollDegree);
    }, []);

    return (
        <BaseLayout>
            {/* 첫번째 프레임 */}
            <FrameLayout>
                <Title>나무의 노트</Title>
                <CoverLayout width={15 + scrollDegree * 70 + '%'}>
                    <Pencil src={PencilIcon}/>
                </CoverLayout>
            </FrameLayout>
            {/* 두번째 프레임 */}
            <FrameLayout>
                <PaperLayout
                    align="flex-start"
                    rotate={isMobile ? -4 * scrollDegree + 'deg' : -8 * scrollDegree + 'deg'}
                    translate={isMobile ? -40 * scrollDegree + 'px' : -60 * scrollDegree + 'px'}
                    shadowRadius={20 * scrollDegree + 'px'}
                    back>
                    <TransparentButton onClick={() => window.open('https://github.com/namooplus')}><IoLogoGithub fontSize="1.4rem"/></TransparentButton>
                    <TransparentButton onClick={() => window.open('https://www.instagram.com/min.i.stop/')}><IoLogoInstagram fontSize="1.4rem"/></TransparentButton>
                </PaperLayout>
                <PaperLayout
                    rotate={isMobile ? 4 * scrollDegree + 'deg' : 8 * scrollDegree + 'deg'}
                    translate={isMobile ? 25 * scrollDegree + 'px' : 40 * scrollDegree + 'px'}
                    shadowRadius={20 * scrollDegree + 'px'}
                    back/>
                <PaperLayout
                    align="center"
                    rotate="0"
                    translateX="0"
                    translateY="0"
                    shadowRadius={20 * scrollDegree + 'px'}>
                    <Image src={namooIcon} alt="나무 아이콘"/>
                    <Paragraph>
                        안녕하세요! 나무입니다.<br/>
                        현재 연세대학교 컴퓨터과학과에 재학중이며 훌륭한 개발자가 되기 위해 많이 배우고 있는 중입니다 :)<br/>
                        안드로이드 앱 개발과 더불어 최근에는 React를 이용한 웹 개발을 공부하고 있습니다!<br/>
                        특히 UI/UX에 관심이 많으며 드로잉도 시도 중입니다.<br/>
                        '프로젝트'를 눌러 지금까지 직접 참여한 프로젝트들을 확인할 수 있습니다!<br/>
                        정리 및 공유를 위한 블로그도 운영하고 있으니 한 번씩 구경해주세요 :)
                    </Paragraph>
                    <ButtonLayout>
                        <SimpleButton route="/project">프로젝트</SimpleButton>
                        <SimpleButton route="/post">블로그</SimpleButton>
                    </ButtonLayout>
                </PaperLayout>
            </FrameLayout>
            {/* 오버레이 */}
            <OverlayLayout opacity={1 - scrollDegree}>
                <GuideLabel>⌵</GuideLabel>
            </OverlayLayout>
        </BaseLayout>
    );
}

export default IntroPage;