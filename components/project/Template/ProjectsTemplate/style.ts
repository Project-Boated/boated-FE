import styled from 'styled-components';

export const SearchTabWrapper = styled.div`
  display: flex;
  align-items: center;

  margin: 24px 0 12px 0;

  & > :nth-child(2) {
    margin: 0 5px 0 20px;
  }

  & > :last-child {
    margin-left: 580px;
  }
`;

export const ProjectListContainer = styled.article`
  & > a > div {
    margin-bottom: 16px;
  }
`;
