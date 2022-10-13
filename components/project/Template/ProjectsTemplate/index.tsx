import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { getProjectMy } from '@/lib/api/projects';
import { GetProjectMyProps } from '@/lib/api/types';
import { sortMethodList } from '@/lib/constants/dropdownList';
import * as queryKeys from '@/lib/constants/queryKeys';

import Text from '@/components/atoms/Text';

import DropDown from '@/components/common/DropDown';

import ProjectItem from '@/components/project/ProjectItem';
import SearchInput from '@/components/project/SearchInput';

import Theme from '@/styles/Theme';

import { SearchTabWrapper, ProjectListContainer } from './style';

interface ProjecTemplateProps {
  query: GetProjectMyProps;
}

const ProjectsTemplate = ({ query }: ProjecTemplateProps) => {
  const router = useRouter();

  const { captain, crew, page, size, sort } = query;

  const [searchTarget, setSearchTarget] = useState<string>('');
  const [selectedSort, setSelectedSort] = useState<'마감 기한 순' | '가나다 순' | '생성일자 순'>('마감 기한 순');

  const sortMethodListForEng = {
    '마감 기한 순': 'deadline,asc',
    '가나다 순': 'name,asc',
    '생성일자 순': 'createdDate,asc',
  };

  const { isLoading, error, data } = useQuery(
    `${queryKeys.PROJECTS_MY}/${captain}/${crew}/${page}/${size}/${sort}}`,
    () => getProjectMy({ captain, crew, page, size, sort }),
  );

  useEffect(() => {
    router.push({
      pathname: router.pathname,
      query: {
        ...query,
        sort: sortMethodListForEng[selectedSort],
      },
    });
  }, [selectedSort]);

  if (isLoading) return <div>loading...</div>;

  if (!data) return <div>loading...</div>;

  if (error) return <div>Error</div>;

  return (
    <>
      <SearchTabWrapper>
        <SearchInput placeholder="프로젝트 검색" searchTarget={searchTarget} setSearchTarget={setSearchTarget} />
        <Text color={Theme.S_5} fontSize={10} lineHeight={14}>
          진행 중인 프로젝트:
        </Text>
        <Text color={Theme.S_5} fontSize={10} lineHeight={14} hasUnderline>
          {String(data?.content.length)}
        </Text>
        <DropDown
          type="size-88"
          borderRadius={14}
          defaultTitle={selectedSort}
          selectList={sortMethodList}
          selectedItem={selectedSort}
          setSelectedItem={setSelectedSort}
        />
      </SearchTabWrapper>
      <ProjectListContainer>
        {data &&
          data.content.length > 0 &&
          data.content.map(({ id, name, description, deadline, captain, crews, terminated, dday, totalDay }) => (
            <Link key={`PROJECT_ITEM_${id}`} href={`project/${id}`}>
              <a href={`project/${id}`}>
                <ProjectItem
                  name={name}
                  description={description}
                  deadline={deadline}
                  captain={captain}
                  crews={crews}
                  terminated={terminated}
                  dday={dday}
                  totalDay={totalDay}
                />
              </a>
            </Link>
          ))}
      </ProjectListContainer>
    </>
  );
};

export default React.memo(ProjectsTemplate);
