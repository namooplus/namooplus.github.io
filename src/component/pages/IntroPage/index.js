import React from "react";
import { withRouter } from "react-router-dom";

import { Container, Group } from "./component";

function IntroPage(props)
{
    // Click event
    const openGithub = () => window.open('https://github.com/namooplus');
    const openInstagram = () => window.open('https://www.instagram.com/min.i.stop/'); 

    return (
        <Container.Base>
            <Group.Overview/>
            <Group.Experience/>
            <Group.Contact openGithub={openGithub} openInstagram={openInstagram}/>
        </Container.Base>
    );
}

export default withRouter(IntroPage);