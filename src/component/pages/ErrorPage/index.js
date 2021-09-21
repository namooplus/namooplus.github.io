import React from "react";
import { withRouter } from "react-router-dom";

import Meta from "../../../util/Meta";
import { Container, Group, Element } from "./component";

function ErrorPage(props)
{
    return (
        <Container.Base>
            <Meta title="나무의 노트 : 404"/>
            <Element.Icon/>
            <Group.Message/>
        </Container.Base>
    );
}

export default withRouter(ErrorPage);