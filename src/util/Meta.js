import { Helmet } from "react-helmet";

function Meta(props) {
    const defaultTitle = "나무의 노트";
    const defaultDescription = "대학생 개발자의 온갖 코딩 기록들";

    return (
        <Helmet>
            <title>{props.title || defaultTitle}</title>
            <meta property="og:title" content={props.title || defaultTitle}/>
            <meta name="description" content={props.description || defaultDescription}/>
            <meta property="og:description" content={props.description || defaultDescription}/>
        </Helmet>
    );
}

export default Meta;