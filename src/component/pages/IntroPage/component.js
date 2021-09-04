import { 
    BaseContainer, 
    SectionContainer, Title, Introduction, ButtonContainer
} from "./style";
import IconButton from "../../common/button/IconButton";
import { IoLogoGithub, IoLogoInstagram } from "react-icons/io5";

export const Container = {
    Base: function(props) {
        return <BaseContainer>{props.children}</BaseContainer>
    },
};

export const Group = {
    Overview: function(props) {
        return (
            <SectionContainer>
                <Title>안녕하세요!<br/>저는 나무입니다.</Title>
                <Introduction>
                    현재 컴퓨터과학과에 재학중이며 코딩에 흥미를 가지고 열심히 공부하고 있습니다.<br/>
                    앱/웹/프로그램 개발 경험이 있으며 특히 UI/UX에 관심이 많습니다!<br/>
                    최근에는 알고리즘 공부로 고통받고 있습니다 ㅜㅜ<br/>
                </Introduction>
            </SectionContainer>
        );
    },
    Experience: function(props) {
        return (
            <SectionContainer>
                <Title>저는 이러한 경험이 있어요!</Title>
                <Introduction>
                    앱/웹/프로그램 개발 경험이 있으며 특히 UI/UX에 관심이 많습니다!<br/>
                    최근에는 알고리즘 공부로 고통받고 있습니다 ㅜㅜ<br/>
                </Introduction>
            </SectionContainer>
        );
    },
    Contact: function(props) {
        return (
            <SectionContainer>
                <Title>더 알아보고 싶나요?</Title>
                <Introduction>
                    현재 컴퓨터과학과에 재학중이며 코딩에 흥미를 가지고 열심히 공부하고 있습니다.<br/>
                    앱/웹/프로그램 개발 경험이 있으며 특히 UI/UX에 관심이 많습니다!<br/>
                    최근에는 알고리즘 공부로 고통받고 있습니다 ㅜㅜ<br/>
                    상단의 아이콘을 눌러 블로그와 프로젝트를 확인할 수 있습니다.
                </Introduction>
                <ButtonContainer>
                    <IconButton icon={IoLogoGithub} size="2rem" onClick={props.openGithub}/>
                    <IconButton icon={IoLogoInstagram} size="2rem" onClick={props.openInstagram}/>
                </ButtonContainer>
            </SectionContainer>
        );
    },
};

export const Element = {

};