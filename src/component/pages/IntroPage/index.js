import React from "react";
import { withRouter } from "react-router-dom";

import { Container, Group, Element } from "./component";

function IntroPage(props)
{
    return (
        <Container.Base>
            <Element.Title/>
            <Element.Pencil/>
            <Group.Overview/>
            <Group.Experience/>
            <Group.Contact/>
        </Container.Base>
    );
}

export default withRouter(IntroPage);