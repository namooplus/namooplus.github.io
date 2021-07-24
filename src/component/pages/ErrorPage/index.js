import React from "react";

import { BaseLayout, Warning } from "./style";
import SimpleButton from "../../common/SimpleButton";
import { IoWarningOutline } from "react-icons/io5";

function ErrorPage(props)
{
    return (
        <BaseLayout>
            <IoWarningOutline fontSize="5rem"/>
            <Warning>잘못된 접근입니다!</Warning>
            <SimpleButton route="/">메인 화면으로 돌아가기</SimpleButton>
        </BaseLayout>
    );
}

export default ErrorPage;