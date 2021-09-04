import { 
    BaseContainer,
    MessageContainer, Warning, Description 
} from "./style";
import { IoWarningOutline } from "react-icons/io5";

export const Container = {
    Base: function(props) {
        return <BaseContainer>{props.children}</BaseContainer>
    },
};

export const Group = {
    Message: function(props) {
        return (
            <MessageContainer>
                <Warning>잘못된 접근입니다!</Warning>
                <Description>상단의 아이콘을 눌러 다른 페이지로 이동합니다.</Description>
            </MessageContainer>
        )
    },
};

export const Element = {
    Icon: function(props) {
        return <IoWarningOutline fontSize="5rem"/>
    },
};