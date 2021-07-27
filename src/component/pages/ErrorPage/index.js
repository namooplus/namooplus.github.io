import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

import { BaseLayout, Warning } from "./style";
import SimpleButton from "../../common/SimpleButton";
import { IoWarningOutline } from "react-icons/io5";

function ErrorPage(props)
{
    useEffect(() => {
        // Header sizing
        props.setHeaderCollapsed(true);
    }, [props]);

    // Click event
    const pushLink = (route) => props.history.push(route);

    return (
        <BaseLayout>
            <IoWarningOutline fontSize="5rem"/>
            <Warning>잘못된 접근입니다!</Warning>
            <SimpleButton onClick={() => pushLink('/')}>메인 화면으로 돌아가기</SimpleButton>
        </BaseLayout>
    );
}

export default withRouter(ErrorPage);