import React from "react";
import { withRouter } from "react-router-dom";

import Meta from "../../../util/Meta";
import { Container, Group, Element } from "./component";

function IntroPage(props)
{
    // 클릭 이벤트
    const link = (route) => props.history.push(route);

    return (
        <Container.Base>
            <Meta title="나무의 노트 : 소개"/>
            <Element.Boundary/>
            <Element.Title/>
            <Element.Pencil/>
            <Group.Overview/>
            <Group.Experience/>
            <Group.Contact link={link}/>
        </Container.Base>
    );
}

export default withRouter(IntroPage);