import { 
    BaseContainer, 
    Boundary,
    Title, Pencil,
    SectionContainer, Subtitle, Description, ButtonContainer
} from "./style";
import SimpleButton from "../../common/button/SimpleButton";
import IconButton from "../../common/button/IconButton";
import { IoLogoGithub, IoLogoInstagram, IoLogoFacebook, IoLogoGooglePlaystore } from "react-icons/io5";
import pencilIcon from "../../../image/pencil.PNG";

export const Container = {
    Base: function(props) {
        return <BaseContainer>{props.children}</BaseContainer>
    },
};

export const Group = {
    Overview: function(props) {
        return (
            <SectionContainer>
                <Subtitle>저를 소개하자면...</Subtitle>
                <Description>
                    현재 연세대학교 컴퓨터과학과에 재학중이며 코딩에 흥미를 가지고 열심히 공부하고 있습니다.<br/>
                    확실히 정해진 진로는 없지만 다양한 개발 활동을 통해 많이 경험해보려 합니다!<br/>
                    알고리즘 공부부터 차근차근...!<br/>
                </Description>
            </SectionContainer>
        );
    },
    Experience: function(props) {
        return (
            <SectionContainer>
                <Subtitle>저는 이러한 경험이 있어요!</Subtitle>
                <Description>
                    - XML/Java/Kotlin을 이용한 안드로이드 앱 개발<br/>
                    - HTML/CSS/JavaScript/React를 이용한 웹 개발<br/>
                    - Python을 이용한 맥/윈도우용 프로그램 개발<br/>
                    - C++과 약간의 SQLite, Ruby 사용 경험<br/>
                    - 최근에는 Flutter 개발을 위해 Dart를 공부하고 있습니다.
                </Description>
                <ButtonContainer>
                    <SimpleButton onClick={() => props.link('/project')}>더 많은 프로젝트 보러가기</SimpleButton>
                    <SimpleButton onClick={() => props.link('/blog')}>블로그 구경하러 가기</SimpleButton>
                </ButtonContainer>
            </SectionContainer>
        );
    },
    Contact: function(props) {
        return (
            <SectionContainer>
                <Subtitle>더 알아보고 싶나요?</Subtitle>
                <Description>
                    상단의 아이콘을 눌러보세요!<br/>
                    아래는 저와 관련된 링크들입니다 :)<br/>
                </Description>
                <ButtonContainer>
                    <IconButton icon={IoLogoGithub} size="1.6rem" onClick={() => window.open('https://github.com/namooplus')}/>
                    <IconButton icon={IoLogoInstagram} size="1.6rem" onClick={() => window.open('https://www.instagram.com/min.i.stop/')}/>
                    <IconButton icon={IoLogoFacebook} size="1.6rem" onClick={() => window.open('https://www.facebook.com/profile.php?id=100007012727310')}/>
                    <IconButton icon={IoLogoGooglePlaystore} size="1.6rem" onClick={() => window.open('https://play.google.com/store/apps/dev?id=6268374276364490916')}/>
                </ButtonContainer>
            </SectionContainer>
        );
    },
};

export const Element = {
    Boundary: function(props) {
        return <Boundary/>
    },
    Title: function(props) {
        return <Title>안녕하세요!<br/>저는 나무입니다.</Title>
    },
    Pencil: function(props) {
        return <Pencil src={pencilIcon}/>
    },
};