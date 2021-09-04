import React from "react";
import { withRouter } from "react-router-dom";

import { Container, Group, Element } from "./component";

function ErrorPage(props)
{
    return (
        <Container.Base>
            <Element.Icon/>
            <Group.Message/>
        </Container.Base>
    );
}

export default withRouter(ErrorPage);