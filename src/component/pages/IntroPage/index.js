import React from "react";
import { withRouter } from "react-router-dom";

import { Container, Group, Element } from "./component";

function IntroPage(props)
{
    // 클릭 이벤트
    const goProjects = () => props.history.push('/project');

    return (
        <Container.Base>
            <Element.Boundary/>
            <Element.Title/>
            <Element.Pencil/>
            <Group.Overview/>
            <Group.Experience goProjects={goProjects}/>
            <Group.Contact/>
        </Container.Base>
    );
}

export default withRouter(IntroPage);