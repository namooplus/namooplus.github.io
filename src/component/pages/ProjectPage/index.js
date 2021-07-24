import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import ProjectList from "../../../data/project/list.json";

import { 
    BaseLayout, 
    HeaderLayout, ALink, Title, Icon,
    ContentLayout, PaperLayout,
    CategoryLayout, Category,
    ListLayout, ListOverlay, ListContainer
} from "./style";
import ProjectCard from "../../common/ProjectCard";
import TransparentButton from "../../common/TransparentButton";
import namooIcon from "../../../image/namoo.png";
import { IoSyncOutline } from "react-icons/io5";

function ProjectPage(props)
{
    const isMobile = useMediaQuery({ query: '(max-width: 1000px)'});

    const [selectedCategory, setSelectedCategory] = useState('');
    const [filteredProjects, setFilteredProjects] = useState([]);

    const selectCategory = (category) => {
        // 카테고리 변경
        setSelectedCategory(category);

        // 프로젝트 리스트 업데이트
        const filteredList = ProjectList.filter(project => project.category === category);
        setFilteredProjects(filteredList);
    };

    useEffect(() => {
        selectCategory('앱');
    }, []);

    return (
        <BaseLayout>
            <HeaderLayout>
                <ALink to="/">
                    {isMobile 
                        ? <Icon src={namooIcon} alt="나무 아이콘"/> 
                        : <Title>나무의<br/>프로젝트</Title>}
                </ALink>
            </HeaderLayout>
            <ContentLayout>
                {isMobile || 
                    <PaperLayout padding="10px" animate>
                        <TransparentButton route="/post"><IoSyncOutline fontSize="1.4rem"/></TransparentButton>
                    </PaperLayout>}
                <PaperLayout padding="0">
                    <CategoryLayout>
                        <Category
                            selected={ selectedCategory === '앱' ? true : false }
                            onClick={() => { selectCategory('앱') }}>앱</Category>
                        <Category
                            selected={ selectedCategory === '웹' ? true : false }
                            onClick={() => { selectCategory('웹') }}>웹</Category>
                        <Category
                            selected={ selectedCategory === '드로잉' ? true : false }
                            onClick={() => { selectCategory('드로잉') }}>드로잉</Category>
                    </CategoryLayout>
                    <ListLayout>
                        <ListOverlay/>
                        <ListContainer>
                            {filteredProjects.map((project, index) => 
                                <ProjectCard 
                                    key={index}
                                    title={project.title}
                                    thumbnail={require(`../../../data/project/${project.id}/thumbnail.png`).default}
                                    date={project.date}
                                    tag={project.tag}
                                    link={`/project/${project.id}`}/>
                            )}
                        </ListContainer>
                    </ListLayout>
                </PaperLayout>
            </ContentLayout>
        </BaseLayout>
    );
}

export default ProjectPage;